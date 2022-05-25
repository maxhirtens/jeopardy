// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
const api_url = "https://jservice.io/api";
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;
const $board = $('.game-board')

/** Get NUM_CATEGORIES random categories from API.
 *
 * Returns array of category ids
 */
const catId = async function getCategoryIds() {
  let categories = [];
  let offsetAmount = Math.floor(Math.random()*100);
  const response = await axios.get(`${api_url}/categories?count=${NUM_CATEGORIES}&offset=${offsetAmount}`);
  for(let id of response.data){
    categories.push(id.title)
  }
  return categories;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  let catObject = await axios.get()
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  $board.empty();
  let $header = $(`
    <thead>
      <tr></tr>
    </thead>
  `);
  $board.append($header);
  for(let cat of await catId()){
    let $headerData = $(`<td>${cat}</td>`);
     $header.append($headerData);
     }
  for(i=0; i<NUM_QUESTIONS_PER_CAT; i++){
    let $cells = $(`
    <tr>
      <td class='${i+1}-1'>?</td>
      <td class='${i+1}-2'>?</td>
      <td class='${i+1}-3'>?</td>
      <td class='${i+1}-4'>?</td>
      <td class='${i+1}-5'>?</td>
      <td class='${i+1}-5'>?</td>
    </tr>
    `);
    $board.append($cells);
  }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $('#loading-screen').attr('src', 'images/loading.gif');
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  $('#loading-screen').attr('src', '');
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  showLoadingView();
  await fillTable();
  hideLoadingView();
}

/** On click of start / restart button, set up game. */

$('#start-button').on('click', setupAndStart);

/** On page load, add event handler for clicking clues */

$('.cell').on('click', );
