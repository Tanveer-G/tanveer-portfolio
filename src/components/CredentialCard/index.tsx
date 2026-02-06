'use client';
import { useTranslations } from 'next-intl';
import { CredentialId } from '@/src/constants/credentials';

interface CredentialCardProps {
  credentialId?: CredentialId;
}

const CredentialCard: React.FC<CredentialCardProps> = () => {
  const t = useTranslations('credentialsCard');
const credentialId="bachelor";
  // Get translated content using the ID
  const degree = t(`credentialsList.${credentialId}.degree`);
  const university = t(`credentialsList.${credentialId}.university`);
  const location = t(`credentialsList.${credentialId}.location`);
  const startDate = t(`credentialsList.${credentialId}.startDate`);
  const endDate = t(`credentialsList.${credentialId}.endDate`);
  const achievement = t(`credentialsList.${credentialId}.achievement`);
  const optionalMessage = t(`credentialsList.${credentialId}.optionalMessage`);

  const lightGrey = 'text-[#B0B0B0]';
  const mediumGrey = 'text-[#808080]';
  const darkGreySeparator = 'text-[#404040]';

  return (
    <section
      id="credentials"
      className="w-full max-w-screen-lg mx-auto py-12 px-4 text-white relative"
    >
      <div
        className={`relative max-w-max mt-4 p-6 rounded-2xl shadow-lg border border-gray-700 bg-[#051622]/50 backdrop-blur-md mx-auto`}
      >
        <p className={`text-xl font-bold mb-2 leading-tight text-white`}>
          {degree}
        </p>
        <p className={`text-lg font-medium mb-2 ${lightGrey}`}>
          {university}, {location}
        </p>
        <p className={`text-gray-400 text-sm`}>
          <span className="font-normal">
            {startDate} <span className={darkGreySeparator}>—</span> {endDate}
          </span>
          <span className={`${darkGreySeparator} mx-2 md:mx-3`}>·</span>
          <span className="font-normal text-sm text-pink-500">{achievement}</span>
        </p>
        {optionalMessage && (
          <p
            className={`text-base text-gray-400 max-w-xl text-auto mt-4 leading-relaxed`}
          >
            {optionalMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default CredentialCard;