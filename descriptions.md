## \_app.jsx:

This is the custom App component, which is the root component for all pages in the application. It imports and applies global CSS styles and wraps the entire application with the Redux store provider. The TopLoadingBar component is conditionally rendered based on the isLoading state. The Seo and Favicon components are responsible for setting up SEO and favicon related metadata. The AppLayout component is used to wrap the main content of each page, providing a consistent layout across the entire application.

## index.jsx:

This is the Home page component that uses the MotionTransition component to apply a smooth transition effect for the page content. The Home page consists of two PopularMediaSlider components, one for movies and another for TV shows, displaying popular media in a slider format. The CollectionsCardsList component is used to display a list of curated collections of movies and TV shows.

## get-content/index.js:

This is an API route handler responsible for fetching content data (movies or TV shows) from TMDb API based on the provided query parameters, such as type, content, and page. It uses the API key and the base API URL from environment variables. It fetches the data and sends the response as JSON.

## search/index.js:

This is another API route handler responsible for handling search requests. It takes query parameters like type, query, and page, and fetches the search results from TMDb API using the API key and base API URL from environment variables. It sends the search results as JSON

## pages\collections\index.jsx

This is the Collections page component that displays the ReelRate logo, a message about the development status of the custom collections functionality, and a link to the Home page. The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\collections\rates.jsx

This is the Rates page component that displays a list of rated movies and TV shows. It uses the HeadingLink component to display the title "My rates." The MediaCardsList component is used to render the list of rated media, with data fetched from the Redux store using the useSelector hook.

## pages\collections\watch-list.jsx

This is the Watch List page component that displays a list of movies and TV shows added to the user's watch list. It uses the HeadingLink component to display the title "My watch list." The MediaCardsList component is used to render the watch list, with data fetched from the Redux store using the useSelector hook. The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\movie\[movieId].jsx

This is the dynamic Movie page component that displays detailed information about a specific movie. The movie ID is fetched from the router query object, and the MediaPage component is used to render the movie details with the provided movie ID and media type "movie." The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\movie\index.jsx

This is the Movies page component that displays a slider of popular movies and a list of movie genres. The PopularMediaSlider component is used to render the popular movies slider, while the GenreCardsList component is used to render the list of movie genres. The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\movie\popular.jsx

This is the Popular Movies page component that displays a list of popular movies. The PopularMediaList component is used to render the list with the media title "movies" and media type "movie." The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\rrtop\[genreId].jsx

This is the dynamic Genre Playlist page component that displays a list of movies for a specific genre. The genre ID is fetched from the static paths generated using the getStaticPaths function. The HeadingLink component is used to display the genre title. The MediaCardsList component is used to render the list of movies for the genre. The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\search\index.jsx

This is the Search page component that displays a search input for users to search for movies and TV shows. The MainSearch component is used to render the search input. The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\tv\[tvId].jsx

This is the dynamic TV Show page component that displays detailed information about a specific TV show. The TV show ID is fetched from the router query object, and the MediaPage component is used to render the TV show details with the provided TV show ID and media type "tv." The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\tv\index.jsx

This is the TV Shows page component that displays a slider of popular TV shows and a list of TV show genres. The PopularMediaSlider component is used to render the popular TV shows slider, while the GenreCardsList component is used to render the list of TV show genres. The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## pages\tv\popular.jsx

This is the Popular TV Shows page component that displays a list of popular TV shows. The PopularMediaList component is used to render the list with the media title "TV shows" and media type "tv." The content is wrapped within the MotionTransition component to apply a smooth transition effect.

## components\AppLayout\AppLayout.jsx

This is the main application layout component that sets up the overall structure and design of the application. It initializes collections from local storage and dispatches the initCollections action to the Redux store. The SideBar component is used to render the desktop navigation, while the MobileMenu component is used to render the mobile navigation. The AnimatePresence component from Framer Motion wraps the children components to enable smooth animations for components entering or leaving the DOM.

## components\ContentLists\CollectionsCards\CollectionsCardsList.jsx

This component is a list of collection cards, displaying two cards for "Watch list" and "Rated movies." Each card has a title, an icon (Eye or Star), and a link to the respective collection page. It uses the HeadingLink component to display the "Collections" title with a link to the collections page.

## components\ContentLists\GenreCards\GenreCardItem.jsx

This component represents an individual genre card in the genre cards list. It displays a genre image and has a link to the respective genre playlist page. The image changes on hover to give a dynamic effect.

## components\ContentLists\GenreCards\GenreCardsList.jsx

This component is a list of genre cards, displaying cards for each genre in the genres array. It uses the HeadingLink component to display the "ReelRate's playlists by genre" title without a link. The GenreCardItem component is used to render each genre card.

## components\ContentLists\MediaCards\MediaCardDescription.jsx

This component displays the title and release date of a media item (movie or TV show). It appears on hover over the media card, with a smooth transition effect.

## components\ContentLists\MediaCards\MediaCardImage.jsx

This component renders an image for a media item (movie or TV show). It uses Next.js Image component for better performance and optimization. The image source is based on the posterPath prop. If the posterPath is not available, it falls back to a placeholder image.

## components\ContentLists\MediaCards\MediaCardItem.jsx

This component represents an individual media card, displaying the media item's image, title, release date, and rating. It includes buttons for rating and adding the media item to the watch list. The card links to the media details page

## components\ContentLists\MediaCards\MediaCardRating.jsx

This component displays the rating value of a media item along with a star icon. It appears at the bottom-left corner of the media card.

## components\ContentLists\MediaCards\MediaCardsList.jsx

This component is a list of media cards for movies or TV shows. It uses the MediaCardItem component to render each media card. The list is displayed as a responsive grid, and it uses the custom MotionRevealUl component for reveal animation.

## components\ContentLists\MediaCards\MediaCardBtns\MediaCardBtns.jsx

This component is a container for the rate and watch list buttons. It accepts three props: oldRate, oldWatchListState, and mediaItem. It uses the MediaCardRateBtn and MediaCardWatchListBtn components to render the buttons. The container has a CSS class to ensure it's positioned correctly.

## components\ContentLists\MediaCards\MediaCardBtns\MediaCardRateBtn.jsx

This component renders a rate button for a media item. It uses the Star icon from the "react-feather" library. When the button is clicked, it toggles the isRating state and displays the RateMedia component. The component takes in oldRate and mediaItem as props.

## components\ContentLists\MediaCards\MediaCardBtns\MediaCardWatchListBtn.jsx

This component renders a watch list button for a media item. It uses the Eye icon from the "react-feather" library. When the button is clicked, it toggles the watch list state, adding or removing the media item from the watch list. The component takes in mediaItem and oldWatchListState as props.

## components\MainSearch\MainSearch.jsx

This component is the main search functionality for the application. It handles user input, filtering, and API requests. It displays search results as media cards, using the MediaCardsList component. It uses the SearchInput component for the search bar, GenreCardsList for showing genre cards when there's no input, MediaFilterDropdown for filtering results, and LoadingSpinner and Message for handling loading and error states.

## components\MainSearch\MediaFilterDropdown.jsx

This component renders a dropdown menu for filtering search results by content type. The dropdown contains options for All, Movies, and TV shows. When a filter option is clicked, the filter state is updated, and the results are filtered accordingly. It takes in filter and updateFilter as props.

## components\MainSearch\SearchInput.jsx

This component renders the search input field. It uses the Search icon from the "react-feather" library. The input field takes user input and passes it to the inputHandler function. The component takes in value and inputHandler as props.

## components\Motion\MotionReveal.jsx

This file exports three components: MotionRevealDiv, MotionRevealUl, and MotionScrollRevealLi. These components are built using the Framer Motion library for animations. MotionRevealDiv and MotionRevealUl handle opacity animations for div and ul elements, respectively, while MotionScrollRevealLi handles scroll reveal animations for li elements.

## components\Motion\MotionTransition.jsx

This component is a wrapper for handling opacity transition animations using the Framer Motion library. It takes a className and children as props and applies the transition effect to the children elements.

## components\MediaDetails\MediaBackground.jsx

This component displays the background image for a given media item. It accepts the content prop that contains media data, including the backdrop path. The image is displayed with a low opacity to create a subtle background effect.

## components\MediaDetails\MediaDetails.jsx

This component is responsible for displaying media details, including the title, overview, and related information. It imports and utilizes other components like MediaBackground, MediaCollectionsBtns, and MediaInfoBlock.

## components\MediaDetails\MediaPage.jsx

MediaPage is a container component that handles fetching media data based on the provided mediaType and mediaId props. It displays the MediaDetails component, a LoadingSpinner, or an error message depending on the state of the data request.

## components\MediaDetails\MediaCollectionsBtns\MediaCollectionsBtns.jsx

This component renders the buttons for adding a media item to a watch list and rating it. It uses the MediaWatchListBtn and MediaRatingBtn components to do so.

## components\MediaDetails\MediaCollectionsBtns\MediaRatingBtn.jsx

This component provides an interface for users to rate a media item. It displays the current rating and a star icon, and when clicked, opens the RateMedia component to allow users to change the rating.

## components\MediaDetails\MediaCollectionsBtns\MediaWatchListBtn.jsx

This component allows users to add or remove a media item from their watch list. It displays either an eye-off or folder-plus icon depending on whether the media item is already in the watch list or not.

## components\MediaDetails\MediaInfoBlock\MediaInfoBlock.jsx

This component displays a list of information items related to a media item. It renders either a MovieInfoBlock or a TvShowInfoBlock, depending on the media type.

## components\MediaDetails\MediaInfoBlock\MediaInfoItem.jsx

This component displays a single piece of information related to a media item, with a given title and content.

## components\MediaDetails\MediaInfoBlock\MovieInfoBlock.jsx

This component displays specific information related to a movie media item, including type, release date, duration, and status.

## components\MediaDetails\MediaInfoBlock\TvShowInfoBlock.jsx

This component displays specific information related to a TV show media item, including type, first air date, total seasons, total episodes, and production status.

## components\Navigation\DekstopNavigation\NavLink.jsx

This component is a NavLink used in the desktop navigation. It imports the Link from "next/link" and useRouter from "next/router". It takes three props: title, url, and Icon. The NavLink component returns a link element with the passed-in url and title, and displays the Icon component. It also checks if the router pathname matches the url prop to determine if the link is active, and styles it accordingly.

## components\Navigation\DekstopNavigation\SideBar.jsx

The SideBar component is part of the desktop navigation. It imports Image and Link from "next/image" and "next/link" respectively. It also imports the SideNav component. The SideBar component returns an aside element with the ReelRate logo, wrapped in a Link to navigate to the homepage, and a SideNav component.

## components\Navigation\DekstopNavigation\SideNav.jsx

The SideNav component is a part of the desktop navigation. It imports various icons from "react-feather" and NavLink from "./NavLink". The SideNav component returns a nav element with a set of NavLink components for Home, Search, My rates, and My watch list.

## components\Navigation\MobileNavigation\MobileMenu.jsx

The MobileMenu component is the mobile navigation menu. It imports various icons from "react-feather", Image, and Link from "next/image" and "next/link". The MobileMenu component returns a fixed nav element at the bottom of the screen with links to Home, Search, My rates, and My watch list.

## components\PopularMedia\PopularMediaList.jsx

The PopularMediaList component displays a list of popular media based on the mediaType and mediaTitle props. It imports various hooks, components, and helper functions. The component makes requests to fetch media content and updates the list based on the pageCount state. It also handles showing more content when the ShowMoreBtn is clicked.

## components\PopularMedia\PopularMediaSlider.jsx

The PopularMediaSlider component displays a slider of popular media content based on the type prop. It imports various hooks and components. The component makes requests to fetch the popular media content and displays it in a SliderList component. It also handles loading and error states.

## components\RateMedia\RateMedia.jsx

The RateMedia component is responsible for displaying a modal window with rating options for the content passed in. It imports various hooks and components, and uses createPortal to render the modal window. It handles adding and deleting rates from the collection and closing the modal window.

## components\RateMedia\RateMediaStars.jsx

The RateMediaStars component is responsible for displaying a set of stars for rating content. It takes the rateHandler and oldRate props. The component renders a set of star icons based on the hoveredRate state and handles click, hover, and blur events to update the hoveredRate state and call the rateHandler function.

## components\Seo\Favicon.jsx

The Favicon component is responsible for adding favicon links to the document head. It imports the Head component from "next/head". The Favicon component returns a Head element with multiple link elements for different favicon sizes.

## components\Seo\Seo.jsx

The Seo component is responsible for setting the title and description meta tags in the document head. It imports the Head component from "next/head". The Seo component takes title and description props, and returns a Head element with the title and meta description tags set based on the props or default values.

## components\Slider\SliderBtns.jsx

This component contains left and right buttons for navigating through the content of the slider. The buttons use the ChevronLeft and ChevronRight icons from the "react-feather" library. The buttons are only displayed when the isActive property is true for the corresponding direction.

## components\Slider\SliderImage.jsx

This component is responsible for rendering an image in the slider. It uses the Next.js Image component to optimize loading and displays a placeholder image when the actual image is not available. The image source is constructed using the imageConfig.baseUrl and content.backdropPath.

## components\Slider\SliderItem.jsx

This component renders a single item in the slider. It uses the transformContent function to process the raw content passed as a prop and then displays the image and title using the SliderImage and title components.

## components\Slider\SliderList.jsx

This component renders the list of slider items and manages the slider's functionality, such as scrolling and button activation. It uses the useSlider and useHoverState custom hooks to handle scrolling and hovering states. It also includes the SliderBtns, SliderItem, and SliderSeeMoreBtn components.

## components\Slider\SliderPlaceholder.jsx

This component renders a simple placeholder for the slider when the actual content is not yet available. It displays a set of gray rectangles as a loading animation.

## components\Slider\SliderSeeMoreBtn.jsx

This component displays a "See more" button at the end of the slider, which navigates to a URL specified by the url prop. The button includes an ArrowRight icon from the "react-feather" library.

## components\UI\HeadingLink.jsx

This component renders a heading with an optional link. The heading is an h3 element, and the link is displayed using the ArrowRight icon from the "react-feather" library. The title, url, and link props are used to customize the component.

## components\UI\LoadingSpinner.jsx

This component displays a simple loading spinner using a MotionRevealDiv component. The spinner is a circular element with a rotating border, indicating that content is loading.

## components\UI\Message.jsx

This component displays a simple message, centered and with a text-base font size. The message text is passed through the message prop.

## components\UI\ShowMoreBtn.jsx

This component renders a "Show more" button, which can be used to reveal additional content. The button's click event is handled by the onShowMore prop.

## components\UI\TopLoadingBar.jsx

This component displays a top loading bar, which is a thin horizontal bar at the top of the page, indicating that content is being loaded. The bar includes a moving segment to show progress.

## store/collections-slice.js

This file contains a Redux slice for managing collections like 'rates' and 'watchList'. It exports actions and reducer for managing these collections, as well as two thunks (addToCollection and deleteFromCollection) for adding and deleting items from these collections.

## store/index.js

This file sets up and exports the Redux store for the application. It imports the reducers from rates-slice and collections-slice and combines them in the configureStore call.

## styles/globals.css

This file contains global styles for the application. It imports Tailwind CSS base, components, and utilities styles. It also contains custom styles for the scrollbar and some responsive styles for hiding the scrollbar.

## utils/config/all-genres.js

This file exports an array of objects containing genre IDs and names for use throughout the application.

## utils/config/tmdb-config.js

This file exports an object containing the base URL and different sizes for images from the TMDB API.

## utils/helpers/collectionsFunctions.js

This file exports a helper function findCollections, which finds if an item is present in the rates and watchList arrays.

## utils/helpers/transformContent.js

This file exports a helper function transformContent, which takes a content object (movie or TV show) and returns a transformed object containing only the required properties for the application.
