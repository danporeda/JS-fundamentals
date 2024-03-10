const list = [];

let input = "";

const renderItems  = () => {
  console.log("********TODO LIST*********");
  for (let i = 0; i < list.length; i++) {
    console.log(`[${i+1}]: ${list[i]}`);
  };
  console.log("***************************");
};

const prompter = () => {
  if (input) {
    input = prompt("What would you like to do?");
  }
  while (input === "") {
    input = prompt("What would you like to do?");
  }
  if (input === null) return input;
  return input.toLowerCase();
};

const addItem = () => {
  let item = prompt("Enter To-Do list item:");
  list.push(item);
  renderItems();
};

const deleteItem = (itemIndex) => {
  list.splice(itemIndex - 1, 1);
  renderItems();
};

const run = () => {
  while (input || input === "") {
    prompter();

    if (input === 'new') {
      addItem();
    } else if (input === 'list') {
      renderItems();  
    } else if (input ==='delete') {
      let item = parseInt(prompt("enter list item number to delete"));
      deleteItem(item);
    } else if (input === 'quit') {
      break;
    } else {
      if (!input) continue;
      alert("Ivalid input. Enter: 'new', 'list', 'delete', or 'quit'");
    }
  }

  console.log("You quit the app");
  console.log(`closing input: ${input}`);
};

run();