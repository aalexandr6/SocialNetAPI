//val time is the current date
//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
const dateFormat = (time) => {
  return moment(time).format("MMM Do YY");
};

// export the User model

module.exports = { User, Thought, Reaction };
