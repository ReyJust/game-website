export function formStatus() {
  /**
    *Remove Form Flags for validations.
  */
  if (document.getElementById('form-message')) {
    document.getElementById('form-message').remove()
  }
}