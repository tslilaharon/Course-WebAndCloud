$(".button").click(function () {
    var $btn = $(this),
        $step = $btn.parents(".modal-body"),
        stepIndex = $step.index(),
        success = new Audio("assets/audio/Success - Sound Effect.mp3"),
        ripping = new Audio("assets/audio/Ripping Paper - Sound Effect.mp3"),
        $pag = $(".modal-header span").eq(stepIndex);

    if (stepIndex === 0 || stepIndex === 1) {
        step1($step, $pag);
        ripping.play();

    } else {
        step3($step, $pag);
        success.play();
    }
});

function step1($step, $pag) {
    console.log("step1");
    // animate the step out
    $step.addClass("animate-out");

    // animate the step in
    setTimeout(function () {
        $step.removeClass("animate-out is-showing").next().addClass("animate-in");
        $pag.removeClass("is-active").next().addClass("is-active");
    }, 600);

    // after the animation, adjust the classes
    setTimeout(function () {
        $step.next().removeClass("animate-in").addClass("is-showing");
    }, 1200);
}

function step3($step, $pag) {
    // console.log("3");

    // animate the step out
    $step.parents(".modal-wrap").addClass("animate-up");

    setTimeout(function () {
        $(".rerun-button").css("display", "inline-block");
    }, 300);
}

$(".rerun-button").click(function () {
    $(".modal-wrap")
        .removeClass("animate-up")
        .find(".modal-body")
        .first()
        .addClass("is-showing")
        .siblings()
        .removeClass("is-showing");

    $(".modal-header span")
        .first()
        .addClass("is-active")
        .siblings()
        .removeClass("is-active");
    $(this).hide();
});

$("#send").click(function () {
    if (CheckBoxCount()) {
        document.forms[0].submit();
    }
    return false;
});



function CheckBoxCount() {

    var inputList = document.getElementsByTagName("input");
    var Checked = 0;

    for (var i = 0; i < inputList.length; i++) {
        if (inputList[i].type == "checkbox" && inputList[i].checked) {
            Checked = Checked + 1;
        }
    }
    (Checked < 2) ? Checked = false : Checked = true;
    return Checked;
}
