import { useState, useEffect } from 'react';
import { defaultSiteData } from '../data/defaultSiteData';

export function useSiteData() {
  const [siteData, setSiteData] = useState(() => {
    const saved = localStorage.getItem('siteData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge saved data with default data to ensure new sections exist
        return { ...defaultSiteData, ...parsed };
      } catch (e) {
        return defaultSiteData;
      }
    }
    return defaultSiteData;
  });

  useEffect(() => {
    localStorage.setItem('siteData', JSON.stringify(siteData));
  }, [siteData]);

  const updateSiteData = (section, field, value) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateArrayItem = (section, arrayField, index, itemField, value) => {
    setSiteData(prev => {
      const newArray = [...prev[section][arrayField]];
      if (itemField) {
        newArray[index] = { ...newArray[index], [itemField]: value };
      } else {
        newArray[index] = value;
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayField]: newArray
        }
      };
    });
  };

  return { siteData, setSiteData, updateSiteData, updateArrayItem };
}