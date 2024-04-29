class t{constructor(t,e,a,o,i,n,s,r){this.name=t,this.creator=e,this.ethereum=a,this.dollar=o,this.views=i,this.favorites=n,this.description=s,this.image=r}}const e=new t("Flying Astronaut","Bob Taylor",9.23,0,15,59,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!","public/images/space-ga758f1522_640.jpg"),a=new t("Death Mask","John Smith",3.78,0,56,87,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!","public/images/art-g388e5fb4f_640.jpg"),o=new t("Pink Shirt Guy","Lucy Pudding",6.56,0,15,9,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!","public/images/art-ga0bb51423_640.jpg"),i=new t("Green Monster","Jacky Foster",15.04,0,78,45,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!","public/images/art-ga1ef76e48_640.jpg");function n({image:t,name:e,creator:a,ethereum:o,dollar:i}){return`
    <div class="nft-card">
        <img class="nft-img" src="${t}" alt="NFT image" />
        <div class="nft-info">
          <p class="nft-name">${e}</p>
          <p class="nft-creator">By ${a}</p>
          <div class="nft-price-box">
            <div class="nft-price-info">
              <p class="nft-price-description">Current price</p>
              <p class="nft-price-ethereum">
                <strong
                  ><span class="ethereum-value">${o}</span> ETH
                </strong>
              </p>
              <p class="nft-price-dollar">
                ($<span class="dollar-value">${i}</span>)
              </p>
            </div>
            <button class="btn nft-button">View NFT</button>
          </div>
        </div>
    </div>`}function s({image:t,name:e,creator:a,ethereum:o,dollar:i,views:n,favorites:s,description:r}){return`
    <div class="data-modal modal-container">
      <div class="flip-container">
        <div class="flip-card">
          <div class="nft-modal-content border-glow">
            <div>
                <img
                  class="modal-nft-img"
                  src="${t}"
                  alt="NFT image"
                />
            </div>
            <div>
                <div class="modal-nav-icons">
                    <ion-icon class="modal-close" name="close-outline"></ion-icon>
                </div>
                <div class="modal-nft-info">
                  <p class="modal-nft-name">${e}</p>
                  <p class="modal-nft-creator">
                    By <a class="modal-creator-link">${a}</a> (click on it)
                  </p>
                  <div class="nft-description">
                    <p class="nft-description-label">Description</p>
                    <p class="nft-description-text">${r}</p>
                  </div>
                  <hr />
                  <div class="grid grid-2-cols-2-rows modal-nft-sale">
                    <p class="nft-prices-label">Current price</p>
                    <div class="nft-prices">
                      <p class="nft-modal-price-ethereum">
                        <strong
                          ><span class="ethereum-value">${o}</span>
                          ETH
                        </strong>
                      </p>
                      <p class="nft-modal-price-dollar">
                        ($<span class="dollar-value">${i}</span>)
                      </p>
                    </div>
                    <div class="modal-nft-time">
                      <ion-icon
                        class="modal-nft-icon"
                        name="time"
                      ></ion-icon>
                      <p>Sale ends in <span class="timer"></span></p>
                    </div>
                  </div>
                  <div class="modal-btn-box">
                    <button class="btn btn-full btn-buy">Buy Now</button>
                    <button class="btn btn-outline btn-favorites">
                      Add to favorites
                    </button>
                  </div>
                  <hr />
                  <div class="modal-nft-stats">
                    <div class="modal-nft-stat">
                      <ion-icon
                        class="modal-nft-icon"
                        name="eye"
                      ></ion-icon>
                      <p>${n} views</p>
                    </div>
                    <div class="modal-nft-stat">
                      <ion-icon
                        class="modal-nft-icon"
                        name="heart"
                      ></ion-icon>
                      <p>${s} favorites</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>`}class r{constructor(t,e,a,o,i,n,s,r,l,c,d,u,m,p,g,v,b){this.name=t,this.joinDate=e,this.items=a,this.views=o,this.followers=i,this.balance=n,this.totalSales=s,this.totalValue=r,this.revenueData=l,this.expanseData=c,this.viewsData=d,this.profitMargin=u,this.salesEffectiveness=m,this.newViewsData=p,this.description=g,this.bannerImg=v,this.profileImg=b}}const l=new r("Bob Taylor","January 2022",56,10,8,562,423,1500,[65,59,80,81,56,55,40],[24,50,12,65,45,73,95],[65,120,80,70,30,90,200],[30,70],[20,80],[40,60],"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.","public/images/cosmos-g20ff2fd5e_640.png","public/images/man-g238e36a78_640.png"),c=new r("John Smith","March 2020",23,30,4,45,213,645,[2,23,75,12,45,52,79],[78,5,45,7,24,89,77],[45,14,154,75,92,4,65],[10,90],[76,24],[34,66],"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.","public/images/bear-gfc11ffe9c_640.png","public/images/man-g1679334f6_640.png"),d=new r("Lucy Pudding","December 2021",145,78,34,789,541,956,[56,89,12,78,98,12,23],[78,56,2,46,13,7,65],[66,178,45,26,198,100,57],[25,75],[55,45],[76,24],"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.","public/images/memphis-g1020b08ad_640.jpg","public/images/woman-g33cc37279_640.jpg"),u=new r("Jacky Foster","August 2020",34,4,16,123,89,237,[88,56,46,12,90,78,65],[77,44,72,33,62,19,37],[125,189,146,23,74,50,64],[64,36],[70,30],[82,18],"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.","public/images/ice-cream-g26773c881_640.png","public/images/woman-g11e4ec8b8_640.jpg");function m({name:t,items:e,views:a,followers:o,bannerImg:i,profileImg:n}){return`
    <div class="creator-card">
      <img class="creator-banner" src="${i}" alt="Creator banner image"/>
      <img
        class="creator-img"
        src="${n}"
        alt="Creator profile image"
      />
      <div class="creator-info">
        <p class="creator-name">${t}</p>
        <div class="creator-stat">
          <p>Items</p>
          <p>${e}</p>
        </div>
        <div class="creator-stat">
          <p>Views</p>
          <p>${a}</p>
        </div>
        <div class="creator-stat">
          <p>Followers</p>
          <p>${o}</p>
        </div>
      </div>
      <button class="btn creator-button">View Creator</button>
    </div>`}const p=function(t,e){new Chart(document.querySelector(".creator-bar-chart").getContext("2d"),{type:"bar",data:{labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"Revenue",data:t,backgroundColor:["rgba(75, 192, 192, 0.2)"],borderColor:["rgb(75, 192, 192)"],borderWidth:1},{label:"Expanses",data:e,backgroundColor:["rgba(255, 69, 0, 0.2)"],borderColor:["rgb(255, 69, 0)"],borderWidth:1}]},options:{animations:{duration:2e3},scales:{x:{grid:{color:"rgba(91,88,88,0.3)"}},y:{grid:{color:"rgba(91,88,88,0.3)"}}},plugins:{legend:{align:"center",labels:{boxWidth:30,color:"#b2abab"}}}}})},g=function(t){let e=document.querySelector(".creator-area-chart").getContext("2d"),a=e.createLinearGradient(0,30,0,170);a.addColorStop(1,"rgba(11, 20, 66, 1)"),a.addColorStop(0,"rgba(75, 192, 192, 0.2)");let o=e.createLinearGradient(0,50,0,100);o.addColorStop(1,"rgba(75, 192, 192,1)"),o.addColorStop(0,"rgba(75, 192, 192,1)"),e.canvas.width=50,e.canvas.height=55,new Chart(e,{type:"line",data:{labels:[1,2,3,4,5,6,7],datasets:[{data:t,tension:.4,backgroundColor:a,fill:!0,borderWidth:1,borderColor:o,pointRadius:0}]},responsive:!0,maintainAspectRatio:!1,options:{scales:{x:{grid:{color:"rgba(91,88,88,0.3)"}},y:{grid:{color:"rgba(91,88,88,0.3)"},ticks:{display:!1}}},animations:{tension:{duration:2e3}},plugins:{title:{padding:{top:10,bottom:10},display:!0,color:"#ded6d6",font:{size:14},text:"Daily Views (7 days)"},legend:{display:!1}}}})},v=function(t,e,a,o){new Chart(document.querySelector(t).getContext("2d"),{type:"doughnut",data:{labels:a,datasets:[{data:o,backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)"],hoverOffset:10,cutout:"60%"}]},options:{rotation:.5*Math.PI,animation:{duration:2e3,animateRotate:!0,easing:"easeInOutCirc"},responsive:!0,maintainAspectRatio:!1,elements:{arc:{borderWidth:2,borderColor:["rgb(75, 192, 192)","rgb(255, 69, 0)"]}},layout:{padding:{bottom:10}},plugins:{title:{padding:{top:10,bottom:10},display:!0,color:"#ded6d6",font:{size:14},text:e},legend:{display:!1}}},plugins:[{id:"centerText",afterDatasetsDraw(t,e,a){let{ctx:o,chartArea:{left:i,right:n,top:s,bottom:r,width:l,height:c}}=t;o.save();let d=t.data.datasets[0].data[0];o.font="bolder 1.6rem Arial",o.fillStyle="white",o.textAlign="center",o.fillText(`${d}%`,l/2,c/2+s+5)}}]})};function b({name:t,joinDate:e,balance:a,totalSales:o,totalValue:i,description:n,bannerImg:s,profileImg:r}){return`
    <div class="data-modal modal-container">
        <div class="modal-creator-content border-glow">
            <div class="modal-nav-icons">
                <ion-icon class="modal-go-back hidden" name="arrow-undo-outline"></ion-icon>
                <ion-icon class="modal-close" name="close-outline"></ion-icon>
            </div>
            <div class="modal-creator-left-content">
                <img
                    class="modal-creator-banner"
                    src=${s}
                    alt="Creator banner image"
                />
                <img
                    class="modal-creator-img"
                    src=${r}
                    alt="Creator profile image"
                />
                <p class="modal-creator-name">${t}</p>
                <p class="creator-join-date">Joined ${e}</p>
                <p class="creator-description">${n}</p>
                <div class="creator-modal-btn-box">
                    <button class="btn btn-full btn-message">Message</button>
                    <button class="btn btn-outline btn-follow">Follow</button>
                </div>
                <hr class="modal-creator-divider"/>
                <ul class="networks-list">
                    <li>
                        <a class="network-link" href=""
                        >
                            <ion-icon
                                class="network-icon"
                                name="logo-facebook"
                            ></ion-icon
                            >
                        </a>
                    </li>
                    <li>
                        <a class="network-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-instagram"
                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="network-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-pinterest"
                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="network-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-twitter"
                            ></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="modal-creator-right-content">
                <p class="creator-analytics-label">Analytics Overview</p>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="analytics-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${a} ETH</p>
                        <p>Total Balance</p>
                    </div>
                </div>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="pricetags-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${o} ETH</p>
                        <p>Total Sales</p>
                    </div>
                </div>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="diamond-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${i} ETH</p>
                        <p>Total NFT Value</p>
                    </div>
                </div>
                <div class="bar-chart-container analytics-border">
                    <canvas class="creator-bar-chart" aria-label="Bar chart showing daily revenue and expanses this week" role="img"></canvas>
                </div>
                <div class="area-chart-container analytics-border">
                    <canvas class="creator-area-chart" aria-label="Area chart showing daily number of views this week" role="img"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-1" aria-label="Doughnut chart showing profit margin" role="img"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-2" aria-label="Doughnut chart showing ratio of NFTs sold" role="img"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-3" aria-label="Doughnut chart showing ratio of new viewers" role="img"></canvas>
                </div>
            </div>
        </div>
    </div>`}function f(t){p(t.revenueData,t.expanseData),g(t.viewsData),v(".creator-doughnut-chart-1","Profit Margin",["Profit","Rest of revenue"],t.profitMargin),v(".creator-doughnut-chart-2","Sales Effectiveness",["Sold","Unsold"],t.salesEffectiveness),v(".creator-doughnut-chart-3","New Viewership",["New","Returning"],t.newViewsData)}const h=document.querySelector("body"),y=document.querySelectorAll("a:link"),w=document.querySelector(".hero-section"),S=document.querySelector(".year"),k=document.querySelector(".link-to-top"),q=document.querySelector(".btn-login"),A=document.querySelector(".btn-signup"),T=document.querySelector(".authentication-modal"),$=document.querySelector("#form-login"),C=document.querySelector("#form-signup"),x=document.querySelector(".nfts-grid"),E=document.querySelector(".creators-grid"),D=[e,a,o,i],I=[l,c,d,u];let L=null,N=23,F=59,j=59;const R=new Date().getFullYear();S.textContent=R.toString(),y.forEach(function(t){"github.com"!==t.hostname&&t.addEventListener("click",function(e){e.preventDefault();let a=t.getAttribute("href");"#"===a&&window.scrollTo({top:0,behavior:"smooth"}),"#"!==a&&a.startsWith("#")&&document.querySelector(a).scrollIntoView({behavior:"smooth"})})}),new IntersectionObserver(function(t){let e=t[0];!1===e.isIntersecting&&document.body.classList.add("sticky"),!0===e.isIntersecting&&document.body.classList.remove("sticky")},{root:null,threshold:0,rootMargin:"-100%"}).observe(w),window.onscroll=function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?k.style.display="block":k.style.display="none"},window.onclick=function(t){let e=t.target;e===T&&(H(),e.style.display="none",h.style.overflowY="scroll"),e===L&&(e.remove(),h.style.overflowY="scroll")},document.body.onclick=function(t){let e=t.target;"close-outline"===e.getAttribute("name")&&(e.closest(".authentication-modal")&&(H(),T.style.display="none",h.style.overflowY="scroll"),e.closest(".data-modal")&&(L.remove(),h.style.overflowY="scroll"))},q.onclick=function(t){document.querySelector("#chk").checked=!0,B(T,t.target),_("AUTHENTICATION",T)},A.onclick=function(t){document.querySelector("#chk").checked=!1,B(T,t.target),_("AUTHENTICATION",T)},window.onload=function(){setInterval(function(){let t=document.querySelector(".timer");j<10&&1==j.toString().length&&(j=`0${j}`),F<10&&1==F.toString().length&&(F=`0${F}`),N<10&&1==N.toString().length&&(N=`0${N}`),null!==t&&(t.textContent=N+" : "+F+" : "+j),--j<0&&(F--,j=59,F<0&&(N--,F=59),N<0&&(N=23))},1e3)};const M=function(t){let e=document.querySelector(".flip-card");document.querySelector(".nft-modal-content");let a=I.find(e=>e.name===t.creator);e.insertAdjacentHTML("beforeend",b(a)),f(a);let o=e.lastElementChild;o.replaceWith(...o.childNodes),document.querySelector(".modal-creator-content").style.transform="rotateY(180deg)";let i=document.querySelector(".modal-creator-link"),n=document.querySelector(".modal-go-back");i.onclick=function(){e.classList.toggle("is-flipped"),n.classList.remove("hidden")},n.onclick=function(){e.classList.toggle("is-flipped")}},_=function(t,e,a){e.style.display="flex",h.style.overflow="hidden","NFT"===t&&M(a)},B=function(t,e){let a=e.getBoundingClientRect().left,o=e.getBoundingClientRect().top;t.style.transformOrigin=`${a}px ${o}px`},H=function(){document.getElementById($.id).reset(),document.getElementById(C.id).reset()},V=function(t,e,a,o,i){for(let n=0;n<e.length;n++)e[n].onclick=function(e){let s=e.target;o.insertAdjacentHTML("beforeend",i(a[n])),B(L=document.querySelector(".data-modal"),s),"NFT"===t&&(document.querySelector(".timer").textContent=N+" : "+F+" : "+j,_(t,L,a[n])),"CREATOR"===t&&(f(a[n]),_(t,L))}},O=function(t,e,a){t.forEach(t=>e.insertAdjacentHTML("beforeend",a(t)))};(async function(){try{let t="ethereum",e=`https://api.coingecko.com/api/v3/simple/price?ids=${t}&vs_currencies=cad`,a=await fetch(e),o=await a.json();return await o[t].cad}catch(t){console.error(`${t}`)}})().then(t=>{let e=Intl.NumberFormat("en-US");D.forEach(function(a){let o=(t*a.ethereum).toFixed(2);a.dollar=e.format(o)})}).then(()=>{O(D,x,n),V("NFT",document.querySelectorAll(".nft-button"),D,x,s),O(I,E,m),V("CREATOR",document.querySelectorAll(".creator-button"),I,E,b)});
//# sourceMappingURL=index.7172f655.js.map
