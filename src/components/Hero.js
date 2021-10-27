import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
      <div>
        <div className="container">
          <h1 id="hero-text">
            Websites
            <br />
            for
            <br />
            business
          </h1>
          <p>&#8595;</p>
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="../images/caya-hero.png"
            className="hero-img"
            width={1096}
            quality={100}
            margin={0}
            formats={["auto", "webp", "avif"]}
            alt="caya wellness"
          />
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="../images/indigo-hero.png"
            className="hero-img"
            width={1096}
            quality={100}
            margin={0}
            formats={["auto", "webp", "avif"]}
            alt="indigo hair care"
          />
        </div>

        <div id="bespoke">
          <h2>We design bespoke web experiences</h2>
        </div>
        <div id="sunbursts">
          <div className="sun-wrapper">
            <svg
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M88.1651 44.0826C88.1651 68.4287 68.4287 88.1651 44.0826 88.1651C19.7364 88.1651 0 68.4287 0 44.0826C0 19.7364 19.7364 0 44.0826 0C68.4287 0 88.1651 19.7364 88.1651 44.0826Z"
                fill="#121212"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.1651 44.083H0V43.083H88.1651V44.083Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.9471 33.2086L1.78616 56.0274L1.52734 55.0615L86.6883 32.2427L86.9471 33.2086Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M82.7478 22.7522L6.39453 66.8348L5.89453 65.9688L82.2478 21.8862L82.7478 22.7522Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.0268 13.5935L13.6846 75.9356L12.9775 75.2285L75.3197 12.8863L76.0268 13.5935Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M67.1478 6.69265L23.0652 83.0459L22.1992 82.5459L66.2818 6.19265L67.1478 6.69265Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.0562 1.86639L34.2374 87.0274L33.2715 86.7686L56.0903 1.60757L57.0562 1.86639Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.8223 -9.92258e-05L45.8223 88.165L44.8223 88.165L44.8223 -9.91821e-05L45.8223 -9.92258e-05Z"
                fill="#F7F4F0"
              />
            </svg>
          </div>

          <div className="sun-wrapper">
            <svg
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M88.1651 44.0826C88.1651 68.4287 68.4287 88.1651 44.0826 88.1651C19.7364 88.1651 0 68.4287 0 44.0826C0 19.7364 19.7364 0 44.0826 0C68.4287 0 88.1651 19.7364 88.1651 44.0826Z"
                fill="#121212"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.1651 44.083H0V43.083H88.1651V44.083Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.9471 33.2086L1.78616 56.0274L1.52734 55.0615L86.6883 32.2427L86.9471 33.2086Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M82.7478 22.7522L6.39453 66.8348L5.89453 65.9688L82.2478 21.8862L82.7478 22.7522Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.0268 13.5935L13.6846 75.9356L12.9775 75.2285L75.3197 12.8863L76.0268 13.5935Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M67.1478 6.69265L23.0652 83.0459L22.1992 82.5459L66.2818 6.19265L67.1478 6.69265Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.0562 1.86639L34.2374 87.0274L33.2715 86.7686L56.0903 1.60757L57.0562 1.86639Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.8223 -9.92258e-05L45.8223 88.165L44.8223 88.165L44.8223 -9.91821e-05L45.8223 -9.92258e-05Z"
                fill="#F7F4F0"
              />
            </svg>
          </div>

          <div className="sun-wrapper">
            <svg
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M88.1651 44.0826C88.1651 68.4287 68.4287 88.1651 44.0826 88.1651C19.7364 88.1651 0 68.4287 0 44.0826C0 19.7364 19.7364 0 44.0826 0C68.4287 0 88.1651 19.7364 88.1651 44.0826Z"
                fill="#121212"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.1651 44.083H0V43.083H88.1651V44.083Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.9471 33.2086L1.78616 56.0274L1.52734 55.0615L86.6883 32.2427L86.9471 33.2086Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M82.7478 22.7522L6.39453 66.8348L5.89453 65.9688L82.2478 21.8862L82.7478 22.7522Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.0268 13.5935L13.6846 75.9356L12.9775 75.2285L75.3197 12.8863L76.0268 13.5935Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M67.1478 6.69265L23.0652 83.0459L22.1992 82.5459L66.2818 6.19265L67.1478 6.69265Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.0562 1.86639L34.2374 87.0274L33.2715 86.7686L56.0903 1.60757L57.0562 1.86639Z"
                fill="#F7F4F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.8223 -9.92258e-05L45.8223 88.165L44.8223 88.165L44.8223 -9.91821e-05L45.8223 -9.92258e-05Z"
                fill="#F7F4F0"
              />
            </svg>
          </div>
        </div>
        <div className="container">
          <div id="equality">
            <h2>
              Our partners embrace equality, sustainability, and positive social
              impact.
            </h2>
            <button>start a project</button>
          </div>
        </div>
      </div>
    )
}

export default Hero