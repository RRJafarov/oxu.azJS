let users = document.querySelector(".oxuaz");
for (let i = 1; i <= 3; i++) {
  let oxuazItem = `
    <div class="row row-cols-1 row-cols-md-3 g-2 oxuaz">
        <div class="card col-4" style="width: 18rem;">
            <img src="img/Telegram.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">"Telegram"da yeni funkiya işə salındı.</p>
            </div>
            <div class="card-foot">
              <ul>
                <li><a href=""><i class="fa-solid fa-thumbs-up"></i></a></li>
                <li><a href=""><i class="fa-solid fa-thumbs-down"></i></a></li>
                <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
              </ul>
            </div>
            <div class="footerr">
              <div class="date"><p>24 Okt</p></div>
              <div class="watch"><span>04:46</span></div>
            </div>
        </div>
    </div>
`;
  users.innerHTML += oxuazItem;
}
