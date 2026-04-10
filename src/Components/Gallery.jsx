import React from "react";

const Gallery = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-22 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/men/whats_new/new_brands/Shrey.jpg" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/men/whats_new/new_styles_from/arrow-sports.jpg" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images-static.nykaa.com/uploads/efecdc57-3332-4819-bcec-feddad95fb09.jpg?tr=w-1800,cm-pad_resize" />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2" >
              <div class="md:p-2 p-1 w-full" >
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images-static.nykaa.com/uploads/cdf5a4e6-da45-47ea-945a-22d0d67e6543.jpg?tr=w-1800,cm-pad_resize" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/women/whats_new/new_styles_from/RSVP-by-Nykaa-Fashion.jpg" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/women/whats_new/new_brands/Anuvas.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
