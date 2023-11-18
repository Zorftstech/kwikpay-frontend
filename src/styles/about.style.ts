import { styled } from "styled-components";
import { colors } from "./theme";

export interface ImgWrapperProps {
    className?: string;
}
export interface BlogCardProps {
    className?: string;
}

const ImgWrapper = styled.div<ImgWrapperProps>`
    width: 50%;
    img {
        width: 100%;
        height: 100%;
    }
`;
const BlogCard = styled.div<BlogCardProps>`

`;

export {ImgWrapper, BlogCard}