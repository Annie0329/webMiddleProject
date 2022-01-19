var wow = new WOW({
    offset: 200,
});
wow.init();
$(document).ready(function () {
    LottieInteractivity.create({
        player: '#firstLottie',
        mode: "cursor",
        actions: [
            {
                type: 'toggle',
            },
        ]
    });
    $("lottie-player").click(function () {
        player.play();
    });
});
