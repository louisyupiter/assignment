$(function () {
  // header
  $("header#header .navigation-wrapper").append(`
    <nav class="primary-nav">
    <div class="primary-nav__logo">
      <a href="./index.html">
        <img src="assets/image/logo.png" alt="logo" />
      </a>
    </div>
    <ul class="primary-nav__list">
      <li class="primary-nav__item link">
        <button class="home-nav-btn">Home</button>
      </li>
      <li class="primary-nav__item link">
        <button class="aboutme-nav-btn">About Me</button>
      </li>
      <li class="primary-nav__item link">
        <button class="article-nav-btn">Article</button>
      </li>
    </ul>
    <button type="button" class="mobile-nav__button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
    </button>
    </nav>
    <nav class="mobile-nav">
    <button type="button" class="mobile-nav__button">
      <svg class="x-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
      </svg>
      <svg class="btn-close" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24px" x="0px" y="0px"
        viewBox="0 0 44.51 13.69" style="enable-background:new 0 0 44.51 13.69;" xml:space="preserve">
        <path class="c-textclosebtn textclosebtn" d="M2.29,11.87c-1.1-1.21-1.66-2.84-1.66-4.88c0-2.04,0.55-3.67,1.66-4.88S4.81,0.3,6.55,0.3c1.38,0,2.56,0.38,3.53,1.13
          c0.97,0.75,1.62,1.85,1.93,3.29h-1.53C9.94,2.69,8.63,1.68,6.55,1.68c-1.31,0-2.36,0.47-3.15,1.4C2.61,4.04,2.21,5.34,2.21,6.99
          c0,1.66,0.4,2.95,1.19,3.89c0.79,0.95,1.84,1.42,3.15,1.42c0.98,0,1.86-0.31,2.63-0.92c0.76-0.59,1.22-1.47,1.39-2.65h1.51
          c-0.17,1.6-0.77,2.81-1.82,3.65c-1.06,0.86-2.29,1.3-3.71,1.3C4.81,13.69,3.39,13.09,2.29,11.87z"/>
        <path class="l-textclosebtn textclosebtn" d="M13.7,13.4V0.58h1.44V13.4H13.7z"/>
        <path class="o-textclosebtn textclosebtn" d="M21.35,13.62c-1.31,0-2.39-0.44-3.24-1.33c-0.84-0.88-1.26-2.05-1.26-3.53s0.42-2.65,1.26-3.53
          c0.85-0.89,1.93-1.33,3.24-1.33c1.31,0,2.39,0.44,3.24,1.33c0.84,0.88,1.26,2.05,1.26,3.53s-0.42,2.65-1.26,3.53
          C23.74,13.18,22.66,13.62,21.35,13.62z M21.35,12.32c0.91,0,1.64-0.32,2.18-0.96c0.54-0.62,0.81-1.49,0.81-2.61
          c0-1.13-0.27-2-0.81-2.63c-0.54-0.62-1.27-0.94-2.18-0.94s-1.64,0.31-2.18,0.94c-0.54,0.62-0.81,1.5-0.81,2.63
          c0,1.12,0.27,1.99,0.81,2.61C19.71,12.01,20.44,12.32,21.35,12.32z"/>
        <path class="s-textclosebtn textclosebtn" d="M26.71,10.45h1.46c0.08,0.7,0.31,1.19,0.69,1.49c0.38,0.29,0.98,0.44,1.79,0.44c1.49,0,2.23-0.48,2.23-1.44
          c0-0.42-0.15-0.74-0.46-0.95c-0.31-0.22-0.86-0.4-1.67-0.56L29.9,9.26C27.97,8.9,27,7.99,27,6.53c0-0.8,0.3-1.44,0.91-1.92
          s1.43-0.71,2.48-0.71c2.46,0,3.72,1.03,3.78,3.08h-1.44c-0.04-0.67-0.24-1.15-0.61-1.42c-0.37-0.28-0.95-0.41-1.73-0.41
          c-0.62,0-1.1,0.12-1.44,0.36s-0.5,0.58-0.5,1.01c0,0.41,0.14,0.71,0.43,0.92c0.29,0.2,0.77,0.38,1.44,0.52l0.83,0.16
          c1.14,0.23,1.96,0.55,2.46,0.97c0.5,0.42,0.75,1.01,0.75,1.76c0,0.88-0.33,1.56-0.98,2.04s-1.56,0.73-2.71,0.73
          C28.17,13.62,26.86,12.56,26.71,10.45z"/>
        <path class="e-textclosebtn textclosebtn" d="M43.89,9.26h-7.06c0.07,1.01,0.35,1.77,0.85,2.28c0.49,0.51,1.16,0.77,2.02,0.77c1.28,0,2.11-0.58,2.47-1.73h1.49
          c-0.25,0.94-0.72,1.68-1.4,2.22c-0.68,0.55-1.55,0.82-2.59,0.82c-1.28,0-2.32-0.44-3.11-1.31c-0.8-0.88-1.21-2.06-1.21-3.55
          c0-1.46,0.4-2.64,1.19-3.53c0.78-0.89,1.81-1.33,3.1-1.33c1.33,0,2.38,0.46,3.13,1.39c0.76,0.92,1.13,2.08,1.13,3.48V9.26z
          M37.76,5.92c-0.48,0.47-0.78,1.16-0.9,2.04h5.47c-0.07-0.82-0.35-1.48-0.83-1.99c-0.48-0.51-1.11-0.77-1.89-0.77
          C38.86,5.21,38.24,5.45,37.76,5.92z"/>
      </svg>



    </button>
    <ul class="primary-nav__list">
      <li class="primary-nav__item link">
        <button class="home-nav-btn">Home</button>
      </li>
      <li class="primary-nav__item link">
        <button class="aboutme-nav-btn">About Me</button>
      </li>
      <li class="primary-nav__item link">
        <button class="article-nav-btn">Article</button>
      </li>
    </ul>
    </nav>
    `);

  // footer
  $("footer#footer").append(`
    <p>&copy; 2020 Louis Yupiter C. <em>All Rights Reserved</em>.</p>
  `);

  // comments section

  //---show title-comment
  $('.title-comment').append(`
  <h2>Comments (<span class="total-comments" data-value="0">0</span>)</h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
  `);

  //---show form comment
  $('form.post-article').append(`
  <div class="comments-name">
  <label for="name">Name :</label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="your name here.."
    required
  />
</div>
<div class="comments-text">
  <label class="hide" for="comment" aria-hidden="true"
    >Your Comments :</label
  >
  <input
    type="text"
    id="comment"
    name="comment"
    placeholder="write your comment here.."
    required
  />
  <!-- <textarea placeholder="write your comment here..."></textarea> -->
  <div class="button-submit">
    <svg
      width="24px"
      height="24px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linejoin: round;
        stroke-miterlimit: 1.41421;
      "
    >
      <path
        id="telegram-1"
        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
      />
    </svg>
  </div>
  <input
    class="hide"
    type="submit"
    value="Submit"
    aria-hidden="true"
  />
</div>
  `)

  //---show list comment
  $('.title-comment').on('click',function(){
    $('.comments-shown').toggleClass("comments-shown-active");
  })

  //---get totalValue list comment after screen loaded
  setTimeout(() => {
    $(".post-article")
      .parent()
      .find("h2 .total-comments")
      .text(
        `${$(".post-article").siblings(".comments-shown").children().length}`
      );
  }, 500);

  //---funtion when the form is submitted
  $(".post-article").on("submit", function (e) {
    e.preventDefault();
    const formComments = $(this);
    const nameComment = formComments
      .children(".comments-name")
      .children("input");
    const nameCommentVal = nameComment.val();
    // console.log(nameCommentVal);
    const textComment = formComments
      .children(".comments-text")
      .children("input");
    const textCommentVal = textComment.val();
    // console.log(textCommentVal);
    const listComments = $(this).siblings(".comments-shown");
    let listItemCommentTotal = listComments.children().length;
    // console.log(listCommentsTotal);

    const sectionComments = formComments.parent();
    const sumComments = sectionComments.find("h2 .total-comments");

    const notif = $(this).siblings(".notif-comments");
    const listNotif = $(this).siblings(".notif-comments").children();

    //---remove notif comment when submitted
    listNotif.slideUp("slow", function () {
      listNotif.remove();
    });

    //---function {add +1 totalValue list comment when submitted}
    let totalComment = () => {
      listItemCommentTotal += 1;
      // console.log(listItemCommentTotal);
      sumComments.text(`${listItemCommentTotal}`);
      sumComments.attr("data-value", listItemCommentTotal);
    };

    //---add some list comment when submitted
    if (listItemCommentTotal % 2 === 0) {
      listComments.show(250, function () {
        listComments.append(`
          <div class="comments-list comments-even">
            <h3>${nameCommentVal}</h3>
            <p>${textCommentVal}</p>
          </div>
        `);
      });
      totalComment();
    } else {
      listComments.append(`
        <div class="comments-list comments-odd">
          <h3>${nameCommentVal}</h3>
          <p>${textCommentVal}</p>
        </div>
      `);
      totalComment();
    }
    //---show list comment when submitted
    $('.comments-shown').addClass("comments-shown-active");
    //---show notif comment when submitted
    setTimeout(() => {
      notif
        .append(
          `
          <div class="notif-worked">
            <span>Comment Added Successfully!</span>
            <div class="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
                />
              </svg>
            </div>
          </div>
        `
        )
        .hide()
        .show("slow");
    }, 500);

    //---to get array articles from post-article.js
    for (let i = 0; i < articles.length; i++) {
      nameVal = $("form.post-article input#name").val();
      textVal = $("form.post-article input#comment").val();

      //--- push comment to array
      let getClassPost = $("body").attr("class");
      for (let j = 0; j < articles[i]["comment"].length; j++) {
        if (getClassPost === `post-${articles[i].slug}`) {
          articles[i]["comment"].push({ name: nameVal, text: textVal });
          break;
        }
      }
      console.log(articles[i]["comment"]);
    }

    $("form.post-article input#name").val("");
    $("form.post-article input#comment").val("");
  });

  //---to hide notif
  $(this).on("click", ".notif-worked", function () {
    $(".notif-worked").slideUp("slow", function () {
      $(".notif-worked").remove();
    });
  });

  //--- button navigation linked
  $(".primary-nav__item button").on("click", function () {
    const navItem = $(this);

    if (navItem.attr("class") === "home-nav-btn") {
      window.location.replace("./index.html");
      return false;
    } else if (navItem.attr("class") === "aboutme-nav-btn") {
      window.location.replace("./aboutme.html");
      return false;
    } else if (navItem.attr("class") === "article-nav-btn") {
      window.location.replace("./archive-post.html");
      return false;
    }
    return "";
  });

  $("form.post-article .button-submit").on("click", function () {
    $(".comments-text input").click();
  });

  $("button.mobile-nav__button").click(function () {
    $(".button.mobile-nav__button").toggleClass("active");
    $(".mobile-nav").toggleClass("active");
  });
});
