<script>

    window.onready = function() {
      var galleryClass = ".images-carousel";
      var imageContainerClass = " .jcarousel-item .views-field-field-imagenes-de-la-jornada .field-content";
      var galleryItemContainers = document.querySelectorAll(galleryClass + " .jcarousel-item");
      var galleryImages = document.querySelectorAll(galleryClass + " img");
      var galleryImagesContainers = document.querySelectorAll(galleryClass + imageContainerClass);

      buildModalButtons (galleryImages, galleryImagesContainers, galleryClass + imageContainerClass);
      buildModalViews(galleryImages, galleryItemContainers, galleryClass);
      $( ".conference-content .views-field-field-portada-de-la-jornada" ).after( $(".images-carousel") );
      $(".images-carousel").attr('style','width: 100%');
    };

    function buildModalButtons (imagesArray, imagesContainersArray, containerClass) {
      if ((imagesArray.length == imagesContainersArray.length) && (imagesArray.length > 0)) {
        for (var i = 0; i < imagesArray.length; i++) {

          var modalButtonStartTag = "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#imageModal";
          var modalButtonFinishTag = "'></button>";
          var modalButton = modalButtonStartTag + i + modalButtonFinishTag;
          imagesContainersArray[i].innerHTML = modalButton;
          var galleryImagesButtons = document.querySelectorAll(containerClass + " button");
          galleryImagesButtons[i].appendChild(imagesArray[i]);
        }
      }
    }

    function buildModalViews(imagesArray, itemContainersArray, galleryClass) {
      if ((imagesArray.length == itemContainersArray.length) && (imagesArray.length > 0)) {
        for (var i = 0; i < imagesArray.length; i++) {
          var modalView = getModalView("Imagen " + (i+1) + " de " + imagesArray.length, i);
          var modalViewContainer = document.createElement('div');
          modalViewContainer.innerHTML = modalView;
          itemContainersArray[i].appendChild(modalViewContainer);
          var modalBodyArray = document.querySelectorAll(galleryClass + " .modal-body");
          var modalImage = imagesArray[i].cloneNode(true);
          modalBodyArray[i].appendChild(modalImage);
        }
      }
    }

    function getModalView(modalTitle, index) {
      var modalViewStarTag = "<div id='imageModal"+ index + "' class='modal fade' role='dialog'><div class='modal-dialog modal-lg'><div class='modal-content'>";
      var modalHeaderStarTag = "<div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>";
      var modalHeaderFinishTag = "</h4></div>";
      var modalHeaderTag = modalHeaderStarTag + modalTitle + modalHeaderFinishTag;
      var modalBodyTag = "<div class='modal-body'></div>";
      var modalViewFinishTag = "</div></div></div>";
      var modalView = modalViewStarTag + modalHeaderTag + modalBodyTag + modalViewFinishTag;
      return modalView;
    }
</script>
