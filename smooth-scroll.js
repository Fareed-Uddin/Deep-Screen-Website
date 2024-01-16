function scrollToFeatures() {
    const featuresSection = document.querySelector('.features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  export { scrollToFeatures };