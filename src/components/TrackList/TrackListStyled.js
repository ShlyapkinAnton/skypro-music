import styled from "styled-components";

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background: #181818;
  color: white;
  margin-right: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`
// ._btn {
//   cursor: pointer;
// }
// ._btn-text:hover {
//   border-color: #d9b6ff;
//   color: #d9b6ff;
//   cursor: pointer;
// }

// ._btn-icon:hover svg {
//   fill: transparent;
//   stroke: #acacac;
//   cursor: pointer;
// }

// ._btn-text:active {
//   border-color: #ad61ff;
//   color: #ad61ff;
//   cursor: pointer;
// }

// ._btn-icon:active svg {
//   fill: transparent;
//   stroke: #ffffff;
//   cursor: pointer;
// }
// ._btn-icon:active .track-play__like-svg,
// ._btn-icon:active .track-play__dislike-svg {
//   fill: #696969;
//   stroke: #ffffff;
//   cursor: pointer;
// }

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleCol01 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 447px;
`

export const PlaylistTitleCol02 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 321px;
`

export const PlaylistTitleCol03 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 245px;
`

export const PlaylistTitleCol04 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 60px;
  text-align: end;
`

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const ButtonAuthorItem = styled.a`
  display: block;
  padding-bottom: 28px;
  color: #FFFFFF;

  &:hover {
    color: #B672FF;
    text-decoration: underline;
  }
`

export const FilterItem = styled.div`
  //dropdown 
  position: relative;
  display: inline-block;
`;

export const ButtonItem = styled.li`
  display: block;
  padding-bottom: 28px;
  color: #FFFFFF;

  &:hover {
    color: #B672FF;
    text-decoration: underline;
  }
`

export const ButtonItemLink = styled.a`
  display: block;
  padding-bottom: 28px;
  color: #FFFFFF;

  &:hover {
    color: #B672FF;
    text-decoration: underline;
  }
`

export const ButtonList = styled.div`
  background-color : #313131;
  padding : 34px;
  border-radius : 12px;
  width : 248px;
  max-height : 305px;
  position : absolute;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
    background-color: #4B4949;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #FFFFFF;
  }
`