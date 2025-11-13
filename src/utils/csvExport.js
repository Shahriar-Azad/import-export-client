export const exportToCSV = (data, filename = 'my-exports.csv') => {
  if (!data || data.length === 0) {
    alert('No data to export');
    return;
  }

  // Define headers
  const headers = ['Product Name', 'Price', 'Origin Country', 'Rating', 'Available Quantity'];
  
  // Create CSV content
  const csvContent = [
    headers.join(','),
    ...data.map(item => [
      `"${item.productName || ''}"`,
      item.price || 0,
      `"${item.originCountry || ''}"`,
      item.rating || 0,
      item.availableQuantity || 0
    ].join(','))
  ].join('\n');

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};