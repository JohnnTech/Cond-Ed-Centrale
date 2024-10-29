// Logo handling
document.getElementById("changeLogo").addEventListener("click", () => {
  document.getElementById("logoInput").click();
});

document.getElementById("logoInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("currentLogo").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("removeLogo").addEventListener("click", () => {
  document.getElementById("currentLogo").src = "/img/default-logo.png";
});

// Color management
const colorInputs = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "danger",
  "lightBg",
];
colorInputs.forEach((color) => {
  const colorInput = document.getElementById(`${color}Color`);
  const textInput = document.getElementById(`${color}ColorText`);

  colorInput.addEventListener("input", (e) => {
    textInput.value = e.target.value;
    document.documentElement.style.setProperty(
      `--${color.replace("Color", "")}`,
      e.target.value
    );
  });

  textInput.addEventListener("input", (e) => {
    colorInput.value = e.target.value;
    document.documentElement.style.setProperty(
      `--${color.replace("Color", "")}`,
      e.target.value
    );
  });
});

// Theme presets
document.querySelectorAll(".theme-preset").forEach((preset) => {
  preset.addEventListener("click", () => {
    document
      .querySelectorAll(".theme-preset")
      .forEach((p) => p.classList.remove("active"));
    preset.classList.add("active");

    // Add theme switching logic here
    const themes = {
      default: {
        primary: "#2c3e50",
        secondary: "#34495e",
        accent: "#3498db",
      },
      // Add other theme configurations
    };

    const theme = themes[preset.dataset.theme];
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
        document.getElementById(`${key}Color`).value = value;
        document.getElementById(`${key}ColorText`).value = value;
      });
    }
  });
});

// Photo Gallery Management
const photoGallery = document.getElementById("photoGallery");
const addPhotosBtn = document.getElementById("addPhotos");
const createFolderBtn = document.getElementById("createFolder");
const photoInput = document.getElementById("photoInput");

// Initialize Sortable
new Sortable(photoGallery, {
  animation: 150,
  handle: ".drag-handle",
  ghostClass: "sortable-ghost",
  chosenClass: "sortable-chosen",
});

addPhotosBtn.addEventListener("click", () => photoInput.click());

photoInput.addEventListener("change", (e) => {
  const files = Array.from(e.target.files);
  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      addPhotoToGallery(file);
    }
  });
});

function addPhotoToGallery(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const photoItem = document.createElement("div");
    photoItem.className = "col-md-4 col-6 photo-item";
    photoItem.innerHTML = `
            <div class="position-relative">
                <div class="drag-handle">
                    <i class="fas fa-grip-vertical"></i>
                </div>
                <img src="${e.target.result}" alt="Uploaded photo" class="img-fluid rounded">
                <div class="photo-overlay">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary rename-photo" title="Renomear">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger delete-photo" title="Excluir">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="photo-name">${file.name}</div>
            </div>
        `;
    photoGallery.appendChild(photoItem);
    initializePhotoControls(photoItem);
  };
  reader.readAsDataURL(file);
}

createFolderBtn.addEventListener("click", () => {
  const folderName = prompt("Nome da nova pasta:");
  if (folderName) {
    const folderItem = document.createElement("div");
    folderItem.className = "col-md-4 col-6 folder-item";
    folderItem.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    <i class="fas fa-folder fa-3x text-warning mb-2"></i>
                    <h6 class="folder-name mb-0">${folderName}</h6>
                    <small class="text-muted">0 items</small>
                </div>
            </div>
        `;
    photoGallery.insertBefore(folderItem, photoGallery.firstChild);
  }
});

function initializePhotoControls(photoItem) {
  const renameBtn = photoItem.querySelector(".rename-photo");
  const deleteBtn = photoItem.querySelector(".delete-photo");
  const photoName = photoItem.querySelector(".photo-name");

  renameBtn.addEventListener("click", () => {
    const newName = prompt("Novo nome para a foto:", photoName.textContent);
    if (newName) {
      photoName.textContent = newName;
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja excluir esta foto?")) {
      photoItem.remove();
    }
  });
}

// API Toggles
document.getElementById("weatherApiToggle").addEventListener("change", (e) => {
  document.getElementById("weatherApiConfig").style.display = e.target.checked
    ? "block"
    : "none";
});

document.getElementById("emailApiToggle").addEventListener("change", (e) => {
  document.getElementById("emailApiConfig").style.display = e.target.checked
    ? "block"
    : "none";
});

document.getElementById("emailProvider").addEventListener("change", (e) => {
  document.getElementById("smtpConfig").style.display =
    e.target.value === "smtp" ? "block" : "none";
});
