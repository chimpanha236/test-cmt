document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // យកតម្លៃពីទម្រង់
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    
    // ពិនិត្យថាតើមានទិន្នន័យគ្រប់គ្រាន់ដែរឬទេ
    if (!name || !comment) {
        alert('សូមបំពេញឈ្មោះ និងមតិយោបល់!');
        return;
    }
    
    // បង្កើតមតិថ្មី
    addNewComment(name, email, comment);
    
    // សំអាតទម្រង់
    document.getElementById('commentForm').reset();
});

function addNewComment(name, email, comment) {
    const commentsList = document.getElementById('commentsList');
    
    // បង្កើតធាតុមតិថ្មី
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    
    // បង្កើតកាលបរិច្ឆេទបច្ចុប្បន្ន
    const now = new Date();
    const dateString = now.toLocaleDateString('km-KH', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    // រចនាសម្ព័ន្ធមតិថ្មី
    commentItem.innerHTML = `
        <div class="comment-header">
            <strong>${name}</strong>
            <span class="comment-date">${dateString}</span>
        </div>
        <p class="comment-content">${comment}</p>
        ${email ? `<div class="comment-email" style="font-size: 12px; color: #888; margin-top: 5px;">អ៊ីមែល: ${email}</div>` : ''}
    `;
    
    // ស្វែងរកទីតាំងដើម្បីបន្ថែមមតិថ្មី
    // បន្ថែមមតិថ្មីពីក្រោមក្បាលចំណងជើង "មតិយោបល់"
    const commentsTitle = commentsList.querySelector('h3');
    
    // ប្រសិនបើមានមតិចាស់រួចហើយ，បន្ថែមមតិថ្មីពីលើមតិចាស់ៗ
    const existingComments = commentsList.querySelectorAll('.comment-item');
    if (existingComments.length > 0) {
        // បន្ថែមមតិថ្មីពីលើមតិចាស់ដំបូង
        commentsList.insertBefore(commentItem, existingComments[0]);
    } else {
        // ប្រសិនបើមិនមានមតិចាស់ទេ，បន្ថែមបន្ទាប់ពីក្បាលចំណងជើង
        commentsList.insertBefore(commentItem, commentsTitle.nextSibling);
    }
    
    // បង្ហាញសារបញ្ចប់
    alert('មតិរបស់អ្នកត្រូវបានបញ្ជូនដោយជោគជ័យ!');
}

// បង្កើតមតិគំរូមួយចំនួនសម្រាប់បង្ហាញ
document.addEventListener('DOMContentLoaded', function() {
    const sampleComments = [
        { name: 'សុក្រ័', email: '', comment: 'អត្ថបទនេះមានប្រយោជន៍ណាស់! សូមអរគុណសម្រាប់ការចែករំលែក។' },
        { name: 'វណ្ណា', email: 'vanna@example.com', comment: 'ខ្ញុំចង់ដឹងព័ត៌មានបន្ថែមទៀតអំពីប្រធានបទនេះ។' }
    ];
    
    sampleComments.forEach(sample => {
        addNewComment(sample.name, sample.email, sample.comment);
    });
});