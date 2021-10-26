const html = `
    <a
    href="https://www.songkick.com/artists/9382304"
    class="songkick-widget"
    data-theme="light"
    data-font-color="#000"
    data-detect-style="true"
    data-background-color="#fff"
    data-locale="es"
    >
    </a>
    <script src="//widget.songkick.com/9382304/widget.js"></script>
`;

const TourBox = () => (
  <div>
    <h2>Próximas Fechas</h2>
    <div
      style={{
        marginTop: "-1em",
        fontSize: "0.8em",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
  //   <>
  // <a
  //   href="https://www.songkick.com/artists/9382304"
  //   class="songkick-widget"
  //   data-theme="light"
  //   data-font-color="#000"
  //   data-track-button="on"
  //   data-detect-style="true"
  //   data-background-color="#fff"
  //   data-locale="es"
  // >
  //   <h2>Próximas Fechas</h2>
  // </a>
  // <script src="//widget.songkick.com/9382304/widget.js"></script>
  //   </>
);

export default TourBox;
