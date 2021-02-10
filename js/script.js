document.addEventListener("DOMContentLoaded", function (event) {
    const bar_icon = document.querySelector(".logo #bars");
    const sidebar_home = document.getElementById("sidebar-home");
    const sidebar_two = document.getElementById("sidebar-two");
    const mini_sidebar = document.querySelector(".mini-sidebar");
    const left_side = document.querySelector(".left-side");
    const transparent_bg = document.querySelector(".transparent-bg");

    //Header search hidden or show
    const search_div_close = document.querySelector(".search-box form .fa-arrow-left ");
    const search_div = document.querySelector(".search-box");
    const search_input = document.querySelector(".search-box form input[type='text']");
    const search_div_open = document.querySelector(".header-nav ul li .fa-search");

    search_div_close.addEventListener("click",function(){
        search_div.classList.remove("show");
    });
    search_div_open.addEventListener("click",function(e){
        search_div.classList.add("show");
        search_input.focus();
        e.preventDefault();

    });


    //Transparent background full windows height
    transparent_bg.style.height = document.documentElement.scrollHeight + "px";
    //Navigation sidebar 
    bar_icon.addEventListener("click", function () {
        if (sidebar_home != null)
            sidebar_home.classList.toggle("hidden");

        if (mini_sidebar != null)
            mini_sidebar.classList.toggle("show");

        if (sidebar_two != null)
            sidebar_two.classList.toggle("hidden");

        document.body.classList.toggle("no-scroll");
        transparent_bg.classList.toggle("show");
        left_side.classList.toggle("re-size");//Left side width 70px or 250px


    });
    function fonksiyon(x) {//This function working when happened  max-with 1350px
        if (sidebar_home != null) {
            if (x.matches) { // If media query matches
                sidebar_home.classList.add("hidden");
                left_side.classList.add("re-size");
            } else {
                sidebar_home.classList.remove("hidden");
                left_side.classList.remove("re-size");

            }
        }
    }
    var x = window.matchMedia("(max-width: 1350px)")
    fonksiyon(x) // Call listener function at run time
    x.addListener(fonksiyon) // Attach listener function on state changes
    //NAVIGATON SIDEBAR FINISH
    //Burada ekranda sidebar açıkken , sidebar'dan farklı bir yere tıklanılırsa sidebarı kapatıyoruz.
    window.addEventListener('click', function (e) {
        if  (sidebar_two != null &&sidebar_two.contains(e.target) || bar_icon.contains(e.target)) {

        } else {
           if (sidebar_two!=null) {
            sidebar_two.classList.remove("hidden");
           }
            transparent_bg.classList.remove("show");
            document.body.classList.remove("no-scroll");
        }
    });
    //Show more 
    const video_text = document.querySelector(".video-description .video-text");
    const show_more = document.querySelector(".video-description  .show-more");
    if (video_text != null && video_text.textContent.length > 150) {
        if (show_more != null) {
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

            })
        }
        ;
    }
    else {
        if (show_more !=null) {
            show_more.style.display = "none";
        }
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
        element.addEventListener("click", (e) => {
            var parent_div = element.parentElement.parentElement.parentElement;
            parent_div.classList.toggle("hidden");
            e.preventDefault();
        });

    })
    //Cancel button click finish

    // SUB COMMENT SHOW AND HIDDEN
    const show_sub_comment = document.querySelectorAll(".comment-include #show-sub-comment");
    show_sub_comment.forEach(function (element) {
        element.addEventListener("click", function () {
            var text = element.innerText;
            var split = text.split("");
            var comment_count = split[0];
            if (!element.classList.contains('show-click')) {
                element.innerText = comment_count + "   yanıtı gizle";
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