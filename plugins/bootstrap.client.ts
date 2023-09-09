import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";

class Bootstrap {
  hideModal (id: HTMLElement) {
    const instance = Modal.getInstance(id);
    if (instance) {
      instance.hide();
    }
  }

  showModal (id: HTMLElement) {
    const modal = new Modal(id);
    modal.show();
  }
}

const bootstrap = new Bootstrap();

export default defineNuxtPlugin(() => {
  return {
    provide: { bootstrap }
  };
});
