import Head from 'next/head';
import Image from 'next/image';
import WrapperContainer from '@/Layout/WrapperContainer';

export default function SourceOfInformation() {
  return (
    <>
      <Head>
        <title>Twitter as a Source of Information</title>
      </Head>

      <WrapperContainer>
        <section className="bg-gray-100 py-14 px-6">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
            Twitter as a Source of Information
          </h1>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TwitterInformationSource-gif.gif"
                alt="TwitterInformationSource-gif"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Why Twitter is Trusted for News</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Real-time updates from across the world</li>
                <li>Live coverage of breaking news and events</li>
                <li>Direct statements from politicians, celebrities, and organizations</li>
                <li>Hashtag trends help track public opinion and events</li>
                <li>Verified accounts ensure authenticity of information</li>
                <li>Global audience contributes diverse perspectives</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Twitter isn’t just for social interaction — it’s one of the fastest-growing sources of news and public opinion globally. Our Twitter clone also enables access to timely and verified information.
            </p>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
