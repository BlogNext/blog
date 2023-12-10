import CustomPre from '../CustomPre';
import CustomImage from '../Image';

// Custom components/renderers to pass to MDX.
const mdxComponents = {
  img: CustomImage,
  pre: CustomPre
};

export default mdxComponents;
