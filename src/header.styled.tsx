import styled from 'styled-components'

export const StyledHeader = styled.header`
border-bottom: 1px solid var(--silver);

  & > nav {
    width: var(--box-size);
    margin: 0 auto;

    & > ul {
      float: left;
      list-style: none;

      &:last-of-type {
        float: right;
      }

      & > li {
        float: left;
        margin-right: 10px;

        &:last-child > a {
          background-color: var(--blue);
          color: var(--bg-color);

          &:hover {
            background-color: var(--dark-blue);
            color: var(--blue);
          }
        }
  
        & > a {
          text-decoration: none;
          color: var(--link-color);
          padding: 8px 12px;
          border-radius: 4px;
  
          &:hover {
            color: var(--link-color-hover);
            background-color: var(--silver);
          }
        }
      }
    }
  }
`
