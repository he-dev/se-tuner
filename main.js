var bodyObserver = new MutationObserver(function(mutations) {
    setTimeout(function() {
        hideContributorLabels();
        //showNewPosts(mutations);
    }, 10);
});

var startBodyObserver = function(o) {
    var observerConfig = {
        //attributes: true,
        childList: true,
        subtree: true,
        //characterData: true
    };
    o.observe(document.body, observerConfig);
    //console.log('Body observer started.');
};

hideContributorLabels();
showComments();

startBodyObserver(bodyObserver);

function hideContributorLabels() {
    $(".js-new-contributor-indicator").hide();
    $(".new-contributor-indicator").hide();
}

function showComments() {

    console.log("Show comments.");

    var mouseEvents = document.createEvent("MouseEvents");
    mouseEvents.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    // Clicks on each "Show more comments" link.
    var showLinks = Array.from(document.getElementsByClassName("js-show-link"));
    showLinks.forEach(showLink => {
        showLink.dispatchEvent(mouseEvents);
    });
}

function showNewPosts(mutations) {
    console.log(mutations);
    $(".d-block").click();
}