//Task-6

const itemManager = (function () {
    let items = [];
  
    return {
      addItem: function (item) {
        items.push(item);
      },
      removeItem: function (item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems: function () {
        return items;
      },
    };
  })();
  
  itemManager.addItem("Pen");
  itemManager.addItem("Pencil");
  console.log(itemManager.listItems());
  
  itemManager.removeItem("Pen");
  console.log(itemManager.listItems());
  