import styled from "styled-components";

export const StyledSidebar = styled.div`
.app-container {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  text-decoration: none;
  color: #007bff;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}

.content-container {
  flex: 1;
  padding: 20px;
}
`