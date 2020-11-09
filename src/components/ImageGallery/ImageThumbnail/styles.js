import styled from 'styled-components'

export const ImageThumbnailWrapper=styled.div`
cursor:pointer;
border: 4px solid ${props => props.isactive ? 'blue' : '#eee'}    
`