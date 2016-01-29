/* Define our namespace for puzzles */
var PUZZLES = PUZZLES || {};

/* puzzle is an abstract class which describes the key components of a puzzle */
PUZZLES.puzzle = function(problem_number){
  /* Holds the correct solution to the problem*/
  this.answer = "";
  /* Holds what string should be displayed to the user for the problem */
  this.problem = "";

  this.problem_number = problem_number;
}
/* Displays the problem and the puzzle to the user through a canvas*/
PUZZLES.puzzle.prototype.display = function (canvas_id){
    //Need basic code, likely to be filled in more depth by children
}

/* Generates a puzzle from a list of words specified in the database */
PUZZLES.puzzle.prototype.generate_puzzle = function(database_response)
{
  //Develops the puzzle to display on the fly from a list provided in the
  //database.
}

PUZZLES.puzzle_1 = function(problem_number)
{
  //Make puzzle_1 inherit from puzzle
  PUZZLES.puzzle.call(this,  problem_number)
}
/* Displays the problem and the puzzle to the user through a canvas*/
PUZZLES.puzzle_1.prototype.display = function (canvas_id){
    //Need basic code, likely to be filled in more depth by children
    var canvas = $("#"+canvas_id)[0].getContext('2d');
    canvas.clearRect(0,0,500,500);
    canvas.fillRect(0,0,200,100);
    //canvas.drawCircle(300,300);
}

/* Generates a puzzle from a list of words specified in the database */
PUZZLES.puzzle_1.prototype.generate_puzzle = function(database_connection)
{
  //Develops the puzzle to display on the fly from a list provided in the
  //database.
}
