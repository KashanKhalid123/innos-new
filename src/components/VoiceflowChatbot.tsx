import React from 'react';

interface VoiceflowChatbotProps {
  projectId?: string;
  versionId?: string;
}

const VoiceflowChatbot: React.FC<VoiceflowChatbotProps> = ({
  projectId = '664a7ed00f890e2eba32a82e', // Default project ID (replace if needed)
  versionId = 'production', // Default version ID
}) => {
  const embedCode = `
    <script type="text/javascript">
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '${projectId}' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: '${versionId}'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
    </script>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: embedCode }} />
  );
};

export default VoiceflowChatbot;
