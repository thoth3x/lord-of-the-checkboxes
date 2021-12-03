// Get all checkboxes groups in the page
const checkboxesGroups = document.querySelectorAll('[data-checkboxes]');

[...checkboxesGroups].forEach(group => {
  const masterCheckbox = group.querySelector('input[type=checkbox][data-master]'); // One Checkbox to rule them all...
  const checkboxes = group.querySelectorAll('input[type=checkbox][data-slave]'); // The 'slaves' checkboxes in the current group

  // Add event listener to the table instead to all checkboxes separately.
  group.addEventListener('click', function (event) {
    const el = event.target;

    // We're interested in only 2 types of targets - the 'master' checkbox...
    if (el === masterCheckbox) {
      // Make all checkboxes checked state the same as the state of the master checkbox (true/false) and return (don't go to the next 'if')
      return [...checkboxes].forEach(e => e.checked = el.checked);
    }

    // ...or the 'slaves' ones
    if ([...checkboxes].indexOf(el) === -1) {
      // Don't go further if the clicked elements is not a 'slave' checkbox
      return;
    }

    // Let's assume that all 'slave' checkboxes are checked
    let allChecked = true;

    // Return false and break the loop if it finds a checkbox that is'nt checked
    [...checkboxes].every(e => (allChecked = e.checked));

    // If all of the 'slaves' checkboxes are checked make the 'master' checkbox checked=true as well
    // If at least one 'slave' checkbox is unchecked, then the 'master' is unchecked too
    masterCheckbox.checked = allChecked; // true/false
  });
});
