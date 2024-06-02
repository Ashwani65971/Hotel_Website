window.addEventListener('load',()=>{
  if(DynamicPagination())
    {
      DynamicPagination();
      
    }
})
function DynamicPagination()
{

// gallery section pagination js code starts
function getPageList(totalPages, page, maxLength)
  {
    function range(start, end)
    {
      return Array.from(Array(end - start + 1), (_, i)=> i + start);  
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength)
    {
      return range(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth)
    {
      return range(1, maxLength - sideWidth -1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 - rightWidth)
    {
      return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }

  $(function(){
    var numberOfItems = $('.gallery-wrapper .gallery-images').length;
    var limitPerPage = 15;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7; //how many page elements visible in the pagination
    var currentPage;

    function showPage(whichPage)
    {
      if(whichPage < 1 || whichPage > totalPages) return false;
      currentPage = whichPage;

      $('.gallery-wrapper .gallery-images').hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

      $('.pagination li').slice(1, -1).remove();

      getPageList(totalPages, currentPage, paginationSize).forEach(item=>{
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage).append($("<a>").addClass('page-link').attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page")
      });

      $(".previous-page").toggleClass("disable", currentPage === 1);
      $(".next-page").toggleClass("disable", currentPage === totalPages);
      return true;
    }

    $(".pagination").append(
      $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href:"javascript:void(0)"}).text("Prev")),
      $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href:"javascript:void(0)"}).text("Next")),
      );

    $(".gallery-wrapper").show();
    showPage(1);

    $(document).on("click", ".pagination li.current-page:not(.active)",function(){
      return showPage(+$(this).text());
    });

    $(".next-page").on("click",function(){
      return showPage(currentPage + 1);
    });
    $(".previous-page").on("click",function(){
      return showPage(currentPage - 1);
    });
  });
}



    // js code for gallery image popup
  let StoreImagesArray = [
    {
        imageSource: 'gal-1',
    },
    {
        imageSource: 'gal-2',
    },

    {
        imageSource: 'gal-3',
    },

    {
        imageSource: 'gal-4',
    },

    {
        imageSource: 'gal-5',
    },

    {
        imageSource: 'gal-6',
    },

    {
        imageSource: 'gal-7',
    },

    {
        imageSource: 'gal-8',
    },

    {
        imageSource: 'gal-9',
    }
    ,

    {
        imageSource: 'gal-10',
    }
    ,
    {
        imageSource: 'gal-11',
    }
    ,
    {
        imageSource: 'gal-12',
    }
    ,
    {
        imageSource: 'gal-13',
    }
    ,
    {
        imageSource: 'gal-14',
    }
    ,
    {
        imageSource: 'gal-15',
    }
    ,
    {
        imageSource: 'gal-16',
    }
    ,
    {
        imageSource: 'gal-17',
    }
    ,
    {
        imageSource: 'gal-18',
    }
    ,
    {
        imageSource: 'gal-19',
    }
    ,
    {
        imageSource: 'gal-20',
    }
    
]

let imagesIndex = 1;
window.addEventListener('load',()=>{
storeImages(imagesIndex);
fetchImgesDynamcially();

})

let popupGalleryImg = document.querySelector('.popup-gallery img');

function storeImages(targetImg)
{
popupGalleryImg.src = `images/gallery-images/${StoreImagesArray[targetImg - 1].imageSource}.jpg`;

}

function NextButton()
{
imagesIndex++;
if(imagesIndex > StoreImagesArray.length)
{
imagesIndex = 1;
imagesIndex = imagesIndex;
}
storeImages(imagesIndex);
}

function PreviousButton()
{
imagesIndex--;
if(imagesIndex < 1)
{
imagesIndex = StoreImagesArray.length;
imagesIndex = imagesIndex;
}
storeImages(imagesIndex);
}


let galleryWrapper = document.querySelector('.gallery-wrapper');
let popupGallery = document.querySelector('.popup-gallery');
let cutGallery = document.querySelector('.cutGallery');

function fetchImgesDynamcially(getImg)
{
for(let i = 0; i< StoreImagesArray.length; i++)
{
 let getImages = `<div imgIndex = ${i+1} class="gallery-images" onclick = "openImg(this)">
                     <img src="images/gallery-images/${StoreImagesArray[i].imageSource}.jpg">
                  </div>`

        galleryWrapper.insertAdjacentHTML('beforeend',getImages);
}

}

function openImg(clicked)
{
    let fetchIndex = clicked.getAttribute('imgIndex');
    imagesIndex = fetchIndex;
    storeImages(imagesIndex);
    popupGallery.classList.add('active');
}

if(cutGallery)
{
  cutGallery.addEventListener('click',()=>{
  popupGallery.classList.remove('active');
})
}

