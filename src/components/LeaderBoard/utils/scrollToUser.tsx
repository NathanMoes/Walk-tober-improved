import { ContentRefType, Data } from '../TeamLeaderboardChart';

export const scrollToUser = (contentRef: ContentRefType, data: Array<Data>, chartHeightMultiplier: number) => {
    const content = contentRef.current;
    let y = 0;
    data.every((member: any) => {
      if (!member.highlight) {
        y += 1;
        return true;
      } else {
        return false;
      }
    });
    if (content) {
      content.scrollTop = (y + 2) * chartHeightMultiplier;
    }
  };