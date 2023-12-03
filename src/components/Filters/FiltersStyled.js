import styled from 'styled-components'

// export const CenterBlockFilter = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

// export const BlockFilter = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   margin-bottom: 51px;
// `

// export const FilterTitle = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   margin-right: 15px;
// `

// export const FilterItem = styled.div`
//   //dropdown
//   position: relative;
//   display: inline-block;
// `

// export const FilterButton = styled.button`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid #ffffff;
//   border-radius: 60px;
//   padding: 6px 20px;
//   background: #181818;
//   color: white;

//   &:hover {
//     border-color: #d9b6ff;
//     color: #d9b6ff;
//     cursor: pointer;
//   }

//   &:active {
//     border-color: #ad61ff;
//     color: #ad61ff;
//     cursor: pointer;
//   }

//   &:not(:last-child) {
//     margin-right: 10px;
//   }
// `

// export const ButtonList = styled.div`
//   background-color: #313131;
//   padding: 34px;
//   border-radius: 12px;
//   width: 248px;
//   max-height: 305px;
//   position: absolute;
//   overflow-y: scroll;

//   &::-webkit-scrollbar {
//     width: 7px;
//     border-radius: 10px;
//     background-color: #4b4949;
//   }

//   &::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background-color: #ffffff;
//   }
// `

// export const ButtonItemLink = styled.a`
//   display: block;
//   padding-bottom: 28px;
//   color: #ffffff;

//   &:hover {
//     color: #b672ff;
//     text-decoration: underline;
//   }
// `

// export const ButtonItem = styled.li`
//   display: block;
//   padding-bottom: 28px;
//   color: #ffffff;

//   &:hover {
//     color: #b672ff;
//     text-decoration: underline;
//   }
// `

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
`
export const filterDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const filterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterItem = styled.li`
  font-family: 'StratosSkyeng', sans-serif;
  color: ${(props) => (props.$isSelected ? '#b672ff' : '#fff')};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
    cursor: pointer;
  }
`
