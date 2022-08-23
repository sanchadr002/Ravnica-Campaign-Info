// Declare the url to use for searching cards
const scryfallURL = 'https://api.scryfall.com/cards/'

// This function will take a specific ID from a card I've picked out to display in each component
// The data returned will be a card object from which we can pull the image to display in the browser
export const scryfallIDSearch = (cardID) => {

    return fetch(`${scryfallURL}${cardID}`)
}