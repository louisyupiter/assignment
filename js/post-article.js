const articles = [
  {
    author: `Louis Peter`,
    title: `Hello World!`,
    content: `<p>Apa itu Web Standard? Web Standard adalah teknologi yang dibangun oleh W3C dan lainnya yang dikembangkan untuk menginterpretasikan konten web agar memiliki standar yang dapat dinikmati oleh semua kalangan dan dapat diakses di semua device (smartphone, tablet, desktop dan lain sebagainya).</p> <p>Web yang dibangun sesuai standard (web standard) juga harus mempertimbangkan beberapa aspek diantaranya adalah harus mengedapankan kode yang bersih (clean), valid dan dapat digunakan kembali, dapat diakses oleh semua orang baik penyandang cacat, buta warna dan semacamnya (accessible), juga bersahabat dengan search engine (search engine friendly).</p>`,
    category: `information technology`,
    slug: `hello-world`,
    publishDate: {
      dd: 31,
      mm: 08,
      yy: 2020,
      time: `13:00`,
    },
    comment: [
      {
        name: `Putri Therigan`,
        text: `mantappp`,
      },
    ],
  },
  {
    author: `Atika Silvia`,
    title: `Kesalahan Bukanlah Kegagalan`,
    content: `<p>Beberapa orang takut untuk melakukan kesalahan. <br> Beberapa orang takut mereka akan jatuh dalam kegagalan.<br>Beberapa orang terlalu melihat jauh ke depan <br>Sehingga tidak melihat bahwa ternyata tepat di depan mata ada sebuah jawaban</p>
      <p>Melakukan kesalahan itu hal yang wajar. <br>Semua orang pasti pernah. <br>Tapi, yang membedakan adalah bagaimana setiap orang memanfaatkan kesalahan sebagai kesempatan untuk belajar, demi mengembangkan diri dan mengambil langkah tepat di depan</p>
      <p>Tidak apa untuk merasa lelah. <br>Tidak apa untuk merasa ingin menyerah. <br>Tidak apa untuk merasa terengah-engah. <br>Nafasmu yang penuh perjuangan itu mungkin tak semua orang dapat mengerti. <br>Tidak apa untuk mengesahkan nafas panjang sesekali. <br>Tidak ada yang akan menyalahkanmu. <br>Karena usahamu hanya kamu yang tahu dan perlu kamu hargai dari dirimu sendiri dulu</p>
      <p>Melakukan kesalahan bukanlah suatu ukuran kamu mengalami kegagalan. <br>Kegagalan adalah ketika kamu tidak memilih untuk bangkit lagi dan melewati kesempatan yang sebenarnya bisa kamu raih</p>
      <p>Walaupun semangat mungkin hanyalah sebuah kata bagimu sekarang, <br>Namun aku yakin, suatu saat pasti akan menjadi api yang membakar semangat juang. <br>Jadi... Semangat! <br>Kamu sudah bekerja keras.</p>`,
    category: `slice of life`,
    slug: `kesalahan-bukanlah-kegagalan`,
    publishDate: {
      dd: 21,
      mm: 05,
      yy: 2020,
      time: `20:02`,
    },
    comment: [
      {
        name: `Louis Peter`,
        text: `gileee`,
      },
      {
        name: `Moka Kamishiraishi`,
        text: `Yabaii!`,
      },
      {
        name: `Mulut Pedas Netizen`,
        text: `Apaan nih?!!!!`,
      },
      {
        name: `Fans Fanatic!`,
        text: `WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      },
    ],
  },
  {
    author: `Atika Silvia`,
    title: `Bila Hari Terasa Berat `,
    content: `<p>Bila hari terasa berat, berhentilah sejenak. <br>Untuk apa? Ya, sesederhana karena kamu berhak.</p>
    <p>Terlalu fokus di dunia yang begitu sibuk dan padat. <br>Membuat kamu tak melihat, bahwa jiwa ragamu butuh istirahat</p>
    <p>Berusaha ini itu rasanya tak sepadan. <br>Bila tujuannya hanya untuk memperoleh pengakuan. <br>Seperti apa validasi yang dirimu butuhkan? <br>Apakah sebatas followers yang berjumlah jutaan? <br>Pasangan yang idaman? Atau pekerjaan yang mapan?</p>
    <p>Terlalu fokus dengan itu semua, terkadang membuat kamu jemu sehingga lupa, <br>Bahwa sesunguhnya ada yang jauh lebih penting untuk dijaga. <br>Kamu. Ya. Kamu yang selalu lupa bahwa dirimu berharga. <br>Hanya karena melihat orang lain yang terkesan lebih luar biasa.</p>
    <p>Hidup setiap insan tak harus sama. <br>Tidak ada yang ingin punya masalah yang sama. <br>Tapi kenapa kesuksesan harus sama? <br>Kenapa harus punya pengakuan yang sama?</p>
    <p>Ingat saja,</p>
    <p>Keinginanmu, <br>Kesuksesanmu, <br>Kemampuanmu, <br>Kapasitasmu, <br>Hanya kamu yang tahu,</p>
    <p>Jadi, jangan lupa rehat <br>Bila hari terasa berat</p>`,
    category: `slice of life`,
    slug: `bila-hari-terasa-berat`,
    publishDate: {
      dd: 28,
      mm: 01,
      yy: 2020,
      time: `11:11`,
    },
    comment: [
      {
        name: `Penawan Jiwa`,
        text: `Semangat!!`,
      },
      {
        name: `Dewangga Elsandro`,
        text: `ohh jadi website seperti itu..`,
      },
    ],
  },
];

$(function () {
  // post preview homepage & archive-post page
  for (let i = 0; i < articles.length; i++) {
    let mm = articles[i].publishDate.mm;
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const month = months[Number(mm) - 1];

    let articleArr = articles[i];

    const content = `
      <article class="main-content-side">
            <header class="preview-header f100">
              <h2><a href="${articles[i].slug}.html">${articles[i].title}</a></h2>
              <div class="author">
                <span class="post-author"> Written by:</span><span class="post-name-author">${articles[i].author}</span>
              </div>
            </header>
            <div class="preview-post f100">
                ${articles[i].content}
            </div>
            <span class="preview-time f100">Published Date: <time datetime="2020-08-31T13:00+07:00">${articles[i].publishDate.dd} ${month} ${articles[i].publishDate.yy}, ${articles[i].publishDate.time}</time></span>
            <div class="read-more f100">
              <a class="readmore-btn" href="${articles[i].slug}.html"> Read more </a>
            </div>
      </article>
    `;

    // show comment dari array
    let getClassPost2 = $("body").attr("class");
    for (let j = 0; j < articleArr["comment"].length; j++) {
      let commentName = articleArr["comment"][j]["name"];
      let commentText = articleArr["comment"][j]["text"];
      const comment =
        j % 2 == 0
          ? `
        <div class="comments-list comments-even">
          <h3>${commentName}</h3>
          <p>${commentText}</p>
        </div>
        `
          : `
        <div class="comments-list comments-odd">
          <h3>${commentName}</h3>
          <p>${commentText}</p>
        </div>
        `;
      `post-${articles[i].slug}` === getClassPost2
        ? $(".comments-shown").append(comment).hide().show("slow")
        : "";
    }

    
    // console.log(element);
    $(".main-content-list").append(content);

    const contentSinglePost = `
    <header class="preview-header f100">
      <h2>${articles[i].title}</h2>
      <span class="post-author">
        Written by: <span class="post-name-author">${articles[i].author}</span>
        <time datetime="2020-08-31T13:00+07:00">${articles[i].publishDate.dd} ${month} ${articles[i].publishDate.yy}, ${articles[i].publishDate.time}</time>
      </span>
    </header>
    <div class="preview-post">
      ${articles[i].content}
    </div>
    `;
    let getClassPost = $("body").attr("class");
    `post-${articles[i].slug}` === getClassPost
      ? $("article.main-content-side").prepend(contentSinglePost)
      : `There something wrong!`;
  }
});