import { ReactComponent as Loading } from '../images/loading.svg'
import styled, { keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled(Loading)`
    animation: ${rotate} infinite 1s linear;
    height:1.2rem;
    width:1.2rem;
    display:block;
    margin:auto;
`

export default StyledLoading