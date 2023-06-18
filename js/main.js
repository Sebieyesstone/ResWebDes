
// // window.addEventListener('scroll', function () {
// //   var textContainer = document.querySelector('.text-container-scroll');
// //   var scrollPosition = window.scrollY;
// //   var sectionHeight = textContainer.offsetHeight;
// //   var viewportHeight = window.innerHeight;

// //   // Calculate the scroll position relative to the section
// //   var relativeScroll = scrollPosition - textContainer.offsetTop;

// //   // Calculate the opacity based on the scroll position
// //   var opacity = 0 + (relativeScroll / (sectionHeight - viewportHeight));

// //   // Apply the opacity to the text container
// //   textContainer.style.opacity = opacity;
// // });

// window.addEventListener('scroll', function () {
//   var textContainer = document.querySelector('.scroll-section-con');
//   var textWide = document.querySelector('p.text-wide');
//   var scrollPosition = window.scrollY;
//   var sectionHeight = textContainer.offsetHeight;
//   var viewportHeight = window.innerHeight;

//   // Calculate the scroll position relative to the section
//   var relativeScroll = scrollPosition - textContainer.offsetTop;

//   // Calculate the opacity based on the scroll position
//   var opacity = relativeScroll / (sectionHeight - viewportHeight);

//   // Calculate the margin-top based on the scroll position
//   var marginTop = (-relativeScroll) + 200;

//   // Apply the opacity and margin-top to the text-wide element
//   textWide.style.opacity = opacity;
//   textWide.style.marginTop = marginTop + 'px';
// });

// window.addEventListener('scroll', function () {
//   var mainLogoSection = document.querySelector('.main-logo-ssection');
//   var topSectionLogo = document.querySelector('.bottle.mobile.bottom');
//   var mainLogoSectionRect = mainLogoSection.getBoundingClientRect();

//   // Check if the main logo section is in the viewport
//   if (mainLogoSectionRect.top < window.innerHeight && mainLogoSectionRect.bottom > 0) {
//     // Calculate the scroll position relative to the main logo section
//     var scrollPosition = mainLogoSectionRect.bottom - window.innerHeight;

//     // Rotate the top section logo clockwise when scrolling down
//     // Rotate counterclockwise when scrolling up
//     if (scrollPosition >= 0) {
//       topSectionLogo.style.transform = 'rotate(' + scrollPosition + 'deg)';
//     } else {
//       topSectionLogo.style.transform = 'rotate(' + (-scrollPosition) + 'deg)';
//     }
//   }
// });

// window.addEventListener('scroll', function () {
//   var mainLogoSection = document.querySelector('.logo-overlay-ssection');
//   var topSectionLogo = document.querySelector('.logo-overlay');
//   var mainLogoSectionRect = mainLogoSection.getBoundingClientRect();

//   // Check if the main logo section is in the viewport
//   if (mainLogoSectionRect.top < window.innerHeight && mainLogoSectionRect.bottom > 0) {
//     // Calculate the scroll position relative to the main logo section
//     var scrollPosition = mainLogoSectionRect.bottom - window.innerHeight;

//     // Rotate the top section logo clockwise when scrolling down
//     // Rotate counterclockwise when scrolling up
//     if (scrollPosition >= 0) {
//       topSectionLogo.style.transform = 'rotate(' + scrollPosition + 'deg)';
//     } else {
//       topSectionLogo.style.transform = 'rotate(' + (-scrollPosition) + 'deg)';
//     }
//   }
// });
