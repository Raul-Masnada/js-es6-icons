function getIconsDb() {
  return [
      {
        name: "cat",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "crow",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dove",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "horse",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "user-astronaut",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-graduate",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-ninja",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-secret",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
    ];
  }
  function getColors() {
    return ["blue", "orange", "purple", "rose", "red"];
  }
  function init() {
    const icons = getIconsDb();
    const colors = getColors();
    const types = getTypes(icons);
    const coloredIcons = colorIcons(icons, types, colors);

    console.log(coloredIcons);
    print(coloredIcons);
    addOptions(types);

    const select = $('#type');
    select.change(function(event) {
      const currentType = $(this).val();
      if (types.includes(currentType)) {
          const filteredIcons = filterArray(coloredIcons, currentType);

          console.log(filteredIcons);
          print(filteredIcons);
      } else {
          print(coloredIcons);
      }
    });
  }
  function print(array) {
    const container = $(".icons");
    container.html('');
    array.forEach((item) => {
      let color;
      const iconHtml = `
          <div>
              <i class="${item.family} ${item.prefix}${item.name}" style="color:${item.color}"></i>
              <div class="title">${item.name.toUpperCase()}</div>
          </div>
      `;
      container.append(iconHtml);
    });
  }
  function getTypes(array) {
    const types = [];
    array.forEach((item) => {
        if(!types.includes(item.type)) {
            types.push(item.type);
        }
    });
    return types;
  }
  function colorIcons(array, types, colors) {

      const newArray = array.map(item => {
          const itemClone = {...item};
          const iconType = itemClone.type;
          const indexType = types.indexOf(iconType);
          const color = colors[indexType];
          itemClone.color = color;
          return itemClone;
      });
      return newArray;

  }
  function addOptions(types) {
      const select = $('#type');
      types.forEach(item => {
          const optionHtml = `
              <option value="${item}">${item}</option>
          `;
          select.append(optionHtml);
      });
  }
  function filterArray(array, key) {
      const filteredArray = array.filter(item => {
          if(item.type == key) {
              return item;
          }
      });
      return filteredArray;
  }
  $(init);
