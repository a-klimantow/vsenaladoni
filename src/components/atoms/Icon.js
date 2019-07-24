import React from "react"
import styled from "styled-components"

const Icon = ({ className, size = 20, icon }) => {
  let svg
  switch (icon) {
    case "desktop":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          stroke="#C2CFE0"
        >
          <path
            strokeWidth="1.4"
            d="M1.5 8.346a.3.3 0 01-.3-.3V1.713a.3.3 0 01.3-.3h4.667a.3.3 0 01.3.3v6.333a.3.3 0 01-.3.3H1.5zm0 6.667a.3.3 0 01-.3-.3v-3a.3.3 0 01.3-.3h4.667a.3.3 0 01.3.3v3a.3.3 0 01-.3.3H1.5zm8.333 0a.3.3 0 01-.3-.3V8.38a.3.3 0 01.3-.3H14.5a.3.3 0 01.3.3v6.333a.3.3 0 01-.3.3H9.833zm-.3-13.3a.3.3 0 01.3-.3H14.5a.3.3 0 01.3.3v3a.3.3 0 01-.3.3H9.833a.3.3 0 01-.3-.3v-3z"
          />
        </svg>
      )
      break
    case "control":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          stroke="#C2CFE0"
        >
          <path
            strokeWidth="1.4"
            d="M.917 1.413h14.166c.072 0 .134.061.134.133v5a.136.136 0 01-.134.134H.917a.136.136 0 01-.134-.134v-5c0-.072.062-.133.134-.133zm0 8.333h14.166c.072 0 .134.062.134.134v5a.136.136 0 01-.134.133H.917a.136.136 0 01-.134-.133v-5c0-.072.062-.134.134-.134z"
          />
        </svg>
      )
      break
    case "monitoring":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#C2CFE0"
          viewBox="0 0 18 17"
        >
          <path
            strokeWidth="1.4"
            d="M.7 15.713V1.546c0-.06.014-.105.027-.133h3.689a.315.315 0 01.027.133v14.167c0 .06-.014.105-.027.133H.726a.315.315 0 01-.026-.133zm6.429 0V5.546c0-.06.013-.105.026-.133h3.69a.316.316 0 01.026.133v10.167c0 .06-.013.105-.026.133h-3.69a.315.315 0 01-.026-.133zm6.428.167v-5.167c0-.06.014-.105.027-.133h3.69a.316.316 0 01.026.133v5.167c0 .06-.014.104-.027.133h-3.689a.316.316 0 01-.027-.133z"
          />
        </svg>
      )
      break
    case "reports":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 17"
          stroke="#C2CFE0"
        >
          <path
            strokeWidth="1.4"
            d="M.841 6.213H17.16a.16.16 0 01.111.042c.025.024.03.044.03.058v9.6c0 .013-.005.034-.03.058a.16.16 0 01-.111.042H.84a.16.16 0 01-.111-.042c-.025-.024-.03-.045-.03-.058v-9.6c0-.014.005-.034.03-.058a.16.16 0 01.111-.042zm0-4.8H17.16a.16.16 0 01.111.042c.025.024.03.044.03.058v1.92c0 .013-.005.034-.03.058a.16.16 0 01-.111.042H.84A.16.16 0 01.73 3.49C.705 3.467.7 3.446.7 3.433v-1.92c0-.014.005-.034.03-.058a.16.16 0 01.111-.042z"
          />
        </svg>
      )
      break
    case "profile":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 17"
          stroke="#C2CFE0"
        >
          <path
            strokeWidth="1.4"
            d="M4.811 4.602A3.188 3.188 0 018 1.412a3.188 3.188 0 013.189 3.19A3.188 3.188 0 018 7.79 3.188 3.188 0 014.811 4.6zm-3.889 8.75c0-.39.19-.783.625-1.184.44-.407 1.084-.773 1.85-1.08 1.537-.616 3.393-.925 4.603-.925s3.066.31 4.602.924c.767.308 1.41.674 1.85 1.08.436.402.626.795.626 1.185v2.216H.922v-2.216z"
          />
        </svg>
      )
      break
    case "messages":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 21"
          stroke="#C2CFE0"
        >
          <path d="M15.5 16.42v.293H.5v-.293l1.854-1.854.146-.146V9.213c0-2.906 1.522-5.22 4.115-5.834L7 3.29V2.212c0-.554.446-1 1-1s1 .446 1 1V3.288l.384.091c2.584.615 4.116 2.939 4.116 5.834v5.207l.146.146L15.5 16.42zm-6.086 2.293a1.5 1.5 0 01-2.828 0h2.828z" />
        </svg>
      )
      break
    case "settings":
      svg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
          <path
            fill="#C2CFE0"
            d="M10.583 9.905V.72a.56.56 0 00-.562-.562.56.56 0 00-.562.562v9.186a2.859 2.859 0 00-2.29 2.799c0 1.382.986 2.535 2.29 2.798v4.089c0 .312.25.562.562.562a.56.56 0 00.562-.562V15.5a2.859 2.859 0 002.29-2.797 2.858 2.858 0 00-2.29-2.799zm-.562 4.527a1.73 1.73 0 010-3.457 1.73 1.73 0 010 3.457zM3.7 5.192V.719a.56.56 0 00-.562-.562.56.56 0 00-.563.562v4.473A2.859 2.859 0 00.285 7.99c0 1.382.987 2.536 2.29 2.798v8.803c0 .312.25.562.563.562a.56.56 0 00.562-.562v-8.807a2.859 2.859 0 002.29-2.798A2.854 2.854 0 003.7 5.192zm-.562 4.526a1.73 1.73 0 010-3.456A1.73 1.73 0 014.866 7.99c0 .953-.779 1.728-1.728 1.728zM17.424 5.192V.719a.56.56 0 00-.562-.562.56.56 0 00-.562.562v4.473a2.859 2.859 0 00-2.29 2.798c0 1.382.987 2.536 2.29 2.798v8.807c0 .312.25.562.562.562a.56.56 0 00.562-.562v-8.811a2.859 2.859 0 002.29-2.798 2.85 2.85 0 00-2.29-2.794zm-.562 4.526a1.73 1.73 0 010-3.456 1.73 1.73 0 010 3.456z"
          />
        </svg>
      )
      break
    case "avatar":
      svg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 13">
          <path
            fill="#fff"
            d="M12.707 10.954V1.62c0-.733-.6-1.333-1.333-1.333H2.04C1.307.287.707.887.707 1.62v9.334c0 .733.6 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333zM4.374 7.287L6.04 9.294l2.334-3.007 3 4H2.04l2.334-3z"
          />
        </svg>
      )
      break
    case "search":
      svg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
          <path
            fill="#C2CFE0"
            d="M10.626 9.167h-.659l-.233-.225a5.392 5.392 0 001.308-3.525 5.416 5.416 0 10-5.416 5.416A5.392 5.392 0 009.15 9.525l.225.233v.659l4.166 4.158 1.242-1.242-4.158-4.166zm-5 0a3.745 3.745 0 01-3.75-3.75 3.745 3.745 0 013.75-3.75 3.745 3.745 0 013.75 3.75 3.745 3.745 0 01-3.75 3.75z"
          />
        </svg>
      )
      break
    case "login":
      svg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
          <path
            fill="#C2CFE0"
            d="M17.857.213H8.57c-1.183 0-2.143.96-2.143 2.143V6.64a.714.714 0 101.429 0V2.356c0-.395.32-.715.714-.715h9.286c.394 0 .714.32.714.715V18.07c0 .395-.32.714-.714.714H8.57a.714.714 0 01-.714-.714v-4.286a.714.714 0 10-1.429 0v4.286c0 1.183.96 2.143 2.143 2.143h9.286c1.183 0 2.143-.96 2.143-2.143V2.356c0-1.184-.96-2.143-2.143-2.143z"
          />
          <path
            fill="#C2CFE0"
            d="M14.285 9.498H2.438L4.79 7.146a.714.714 0 00-1.01-1.01L.21 9.707a.714.714 0 000 1.01l3.572 3.573a.714.714 0 101.01-1.01l-2.353-2.353h11.847a.714.714 0 100-1.429z"
          />
        </svg>
      )
      break
    case "place":
      svg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
          <g clipPath="url(#clip0)">
            <path
              fill="#258FFB"
              d="M14.196 1.946a6.642 6.642 0 00-9.392 0c-2.337 2.337-2.6 6.737-.617 9.381L9.5 19l5.313-7.673c1.984-2.644 1.72-7.044-.617-9.381zM9.565 8.77a2.192 2.192 0 110-4.385 2.192 2.192 0 010 4.385z"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0H19V19H0z" />
            </clipPath>
          </defs>
        </svg>
      )
      break
    default:
      svg = null
  }

  return (
    <IconWrap className={className} size={size}>
      {svg}
    </IconWrap>
  )
}

export default Icon

const IconWrap = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    margin: auto;
  }
`
