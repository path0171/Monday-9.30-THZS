console.log("System initialised.");

const locations = [
    {id:"NLG", name:"Noarlunga", type:"All Pets", address:"1 Noarlunga Road", open_hours:"9am-5pm", phone_number:"0123456789"},
    {id:"MRN", name:"Marion", type:"All Pets", address:"2 Marion Road", open_hours:"9am-5pm", phone_number:"0123456789"},
    {id:"ABF", name:"Aberfoyle", type:"Big Pets Only", address:"3 Aberfoyle Road", open_hours:"9am-5pm", phone_number:"0123456789"},
    {id:"SFD", name:"Seaford", type:"All Pets", address:"4 Seaford Road", open_hours:"9am-5pm", phone_number:"0123456789"},
    {id:"GLN", name:"Glenelg", type:"Small Pets Only", address:"5 Glenelg Road", open_hours:"9am-5pm", phone_number:"0123456789"},
];

const locationsContainer = document.getElementById('location-container');
const searchInput = document.getElementById('search-name');
const typeDropdown = document.getElementById('filter-type');

function renderLocations(locationsList) {
    if (!locationsContainer) return;
    
    locationsContainer.innerHTML = '';
    
    locationsList.forEach(location => {
        const cardHTML = `
                <div class="location-card">
                    <h3>${location.name}</h3>
                    <p><strong>Type:</strong> ${location.type}</p>
                    <p><strong>Address:</strong> ${location.address}</p>
                    <p><strong>Open Hours:</strong> ${location.open_hours}</p>
                    <p><strong>Phone Number:</strong> ${location.phone_number}</p>
                </div>
            `;
            locationsContainer.innerHTML += cardHTML;
        });
}

function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeDropdown.value;

    const filtered = locations.filter(location => {
        const matchesName = location.name.toLowerCase().includes(searchTerm);
        const matchesType = selectedType === 'All' || location.type === selectedType;
        return matchesName && matchesType;
    });

    renderLocations(filtered);
}
renderLocations(locations);

if (searchInput && typeDropdown) {
        searchInput.addEventListener('input', handleFilter);
        typeDropdown.addEventListener('change', handleFilter);
}