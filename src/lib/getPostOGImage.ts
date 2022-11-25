import { siteConfigs } from '@/configs/siteConfigs';
import { is } from 'date-fns/locale';

export const getPostOGImage = (socialImage: string | null): string => {
  if (!socialImage) {
    return siteConfigs.bannerUrl;
  }
  if (socialImage.startsWith('https')) {
    return socialImage;
  }
  return siteConfigs.fqdn + socialImage;
};
