import settings from '../settings';

export default async (content: string = 'A') => {
  await document.fonts.load(
    `${settings.fontSize}px RoGSanSrfStd-Bd`,
    content
  );
};
