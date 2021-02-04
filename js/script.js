document.addEventListener("DOMContentLoaded", function (event) {
    const bar_icon = document.querySelector(".logo #bars");
    const sidebar = document.querySelector(".sidebar");
    const video_details_sidebar = document.querySelector(".sidebar.video-details-sidebar");
    const mini_sidebar = document.querySelector(".mini-sidebar");
    const content_div = document.querySelector("main .content");
    //Navigation sidebar 
    bar_icon.addEventListener("click", function () {
        sidebar.classList.toggle("hidden");
        mini_sidebar.classList.toggle("show");
        content_div.classList.toggle("big-content");

    });
    //Burada ekranda sidebar açıkken , sidebar'dan farklı bir yere tıklanılırsa sidebarı kapatıyoruz.
    window.addEventListener('click', function (e) {
        if (sidebar.contains(e.target) || bar_icon.contains(e.target)) {

        } else {
            video_details_sidebar.classList.remove("hidden");
        }
    });
    //Show more 
    const video_text = document.querySelector(".video-description .video-text");
    const show_more = document.querySelector(".video-description  .show-more");
    if (video_text.textContent.length > 150) {
        show_more.addEventListener("click", function () {
            if (!show_more.classList.contains('show-click')) {
                video_text.style.height = "auto";
                show_more.innerText = "DAHA AZ GÖSTER";
                show_more.classList.add("show-click");
            }
            else {
                video_text.style.height = "70px";
                show_more.classList.remove("show-click");
                show_more.innerText = "DAHA FAZLA GÖSTER";
            }

        });
    }
    else {
        show_more.style.display = "none";
    }
    //SHOW MORE FINISH
    //COMMENT REPLY CONTENT SHOW
    const reply_span = document.querySelectorAll(".comment-main .like-dislike .reply");
    const cancel_button = document.querySelectorAll(".comment-main .like-dislike .reply-dialog .buttons #cancel-button");
    reply_span.forEach(element =>
        // Reply button click
        element.addEventListener("click", function () {
            var nextElement = element.nextElementSibling;
            while (nextElement) {
                if (nextElement.classList.contains("reply-dialog")) {
                    nextElement.classList.toggle("hidden");
                    break;
                }
                else {
                    nextElement = nextElement.nextElementSibling;
                }
            }
        })
    )
    //COMMENT REPLY CONTENT SHOW FINISH
    // Cancel button click
    cancel_button.forEach(function (element) {
        element.addEventListener("click",(e)=>{
            var parent_div = element.parentElement.parentElement.parentElement;
            parent_div.classList.toggle("hidden");
            e.preventDefault();
        });
        
    })
    //Cancel button click finish

    // SUB COMMENT SHOW AND HIDDEN
    const show_sub_comment= document.querySelectorAll(".comment-include #show-sub-comment");
    show_sub_comment.forEach(function(element){
        element.addEventListener("click",function(){
            var text = element.innerText;
            var split = text.split("");
            var comment_count = split[0];
            if (!element.classList.contains('show-click')) {
                element.innerText = comment_count + " yanıtı gizle";
                element.classList.add("show-click");
            }
            else {
                element.classList.remove("show-click");
                element.innerText = comment_count + " yanıtı göster";
            }
            var next_subcomment_area = element.parentElement.parentElement.parentElement.nextElementSibling;
            next_subcomment_area.classList.toggle("hidden");
        });
    });
    //SUB COMMENT SHOW AND HIDDEN FINISH

});