import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  return (
    <Helmet>
      <title>{title} | EHSAN Law</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`https://ehsanlaw.com${canonical}`} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
