// 当选中任务后, 进行选中的操作.
$('.task-box-select>div').on('click', function() {
    var boxId = $(this).attr('target-box');
    console.log('选中的元素id: ' + boxId)
    var $taskBoxs = $('.task-container');
    var $selectedBox = $('#' + boxId);

    $(this)
        .addClass('selected')
        .siblings().removeClass('selected');

    $taskBoxs.hide();
    $selectedBox.show();
})