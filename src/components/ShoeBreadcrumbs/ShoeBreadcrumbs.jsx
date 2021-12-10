import Breadcrumbs from '../Breadcrumbs';

const ShoeBreadcrumbs = ({ ...delegated }) => {
  return (
    <Breadcrumbs {...delegated}>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

export default ShoeBreadcrumbs;
