const strContains = (cardTitle, searchString) => {
  return cardTitle.toLowerCase().includes(searchString.toLowerCase());
}

export default strContains;