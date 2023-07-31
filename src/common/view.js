export default class AbstractView {
  constructor() {
    this.app = document.getElementById('root');
  }

  setTitle(title) {
    document.title = title;
  }

  render() {}

  destroy() {}
}
